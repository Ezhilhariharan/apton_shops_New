import React, { useCallback, useEffect, useRef, useState } from 'react';

import './styles.css';

import { useLocation, useNavigate } from 'react-router-dom';

import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import { Drawer, Form, Popover } from 'antd';

import {
  ContentState,
  Editor,
  EditorState,
  Modifier,
  RichUtils,
  convertToRaw,
  convertFromRaw,
  getDefaultKeyBinding,
} from 'draft-js';

import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

import { draftToMarkdown } from 'markdown-draft-js';
import draftToHtml from 'draftjs-to-html';

import { Button } from '../../../../components/form/Button/Button';
import Select from '../../../../components/form/select/selectCustom';
import RadioOption from '../../../../components/form/RadioButton/radioOption';
import CustomTextArea from '../../../../components/form/TextArea';
import Divider from '../../../../components/commonComponents/divider/Divider';
import DropDown from '../../../../components/commonComponents/DropDown/DropDown';
import EllipsisComponent from '../../../../components/commonComponents/Ellipsis/ellipsis';
import Loader from '../../../../components/commonComponents/Loader/Index';

import TemplateSubmitModal from '../TemplateSubmitModal/TemplateSubmitModal';

import ImageSvg from '../../../../assets/customSVG/ImageSvg';
import VideoSvg from '../../../../assets/customSVG/VideoSvg';
import DocSvg from '../../../../assets/customSVG/DocSvg';
import Circlecheck from '../../../../assets/customSVG/Circlecheck';
import PencilIcon from '../../../../assets/customSVG/Pencil';
import List from '../../../../assets/customSVG/List';
import CloseIcon from '../../../../assets/customSVG/Close';

import { ICONS } from '../../../../assets/icons';

import { BUTTONS_LIST, CATEGORIES_OPTIONS, HEADER_OPTIONS, LANGUAGE_OPTIONS } from '../../constant';
import { ADD_VARIABLE_OPTIONS } from '../../../../constant/app/channel';

import { uploadFile } from '../../../../helper/uploadFile';
import { getLanguageCode } from '../../../../helper/setLanguageCode';

import { checkTemplateExits, createAndUpdateTemplate } from '../../api/Api';

import { useAspSelector, useAspDispatch } from '../../../../test/jest-redux-hooks';
import { updateTemplateDetails } from '../../../../reduxToolkit/channelSlice';

const TemplateDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const editorRef = useRef(null);

  const [editTemplateName, setEditTemplateName] = useState(false);
  const [showAddVariableOptions, setShowAddVariableOptions] = useState([]);
  const [showAddButtonsOptions, setShowAddButtonsOptions] = useState(false);
  const [selectedHeaderVariable, setSelectedHeaderVariable] = useState();
  const [selectedBodyVariable, setSelectedBodyVariable] = useState([]);
  const [quickReplyButtons, setQuickReplyButtons] = useState([]);
  const [callToActionButtons, setCallToActionButtons] = useState([]);
  const [selectedFileName, setSelectedFileName] = useState(null);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [showToolbar, setShowToolbar] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [errorMsg, setErrorMsg] = useState({});
  const [submitEnabled, setSubmitEnabled] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState({
    label: location?.state?.selectedCategory,
    value: location?.state?.selectedCategory,
  });
  const [templateName, setTemplateName] = useState(location?.state?.templateName);
  const [selectedLanguages, setSelectedLanguages] = useState(location?.state?.selectedLanguages);
  const [currentLanguage, setCurrentLanguage] = useState(
    location?.state?.selectedLanguages?.length > 0 ? location?.state?.selectedLanguages[0] : '',
  );
  // const [selectedHeaderType, setSelectedHeaderType] = useState('None');
  const [selectedHeaderType, setSelectedHeaderType] = useState({
    label: 'None',
    value: 'None',
  });
  const [state, setState] = useState({
    body: '',
  });
  //
  const [staticDynamic, setStaticDynamic] = useState('Static');
  const [fileLoader, setFileLoader] = useState(false);
  const [templateNameError, setTemplateNameError] = useState(false);

  const dispatch = useAspDispatch();
  const templateField = useAspSelector((state) => state?.Channel?.templateDetails);
  const { currentBrand } = useAspSelector((state) => state.app);

  const replaceWord = (paragraph, replacement) => {
    let updatedParagraph = paragraph;

    ADD_VARIABLE_OPTIONS.forEach(({ value }) => {
      const regex = new RegExp(value, 'g');
      updatedParagraph = updatedParagraph?.replace(regex, replacement);
    });

    return updatedParagraph;
  };

  const [form] = Form.useForm();

  useEffect(() => {
    !templateField?.language && navigate('/user/channels/whatsapp/create-template');

    form
      .validateFields()
      .then(() => {
        if (state?.body) {
          setSubmitEnabled(true);
        } else {
          setSubmitEnabled(false);
        }
      })
      .catch(() => setSubmitEnabled(false));

    const formDetails = templateField?.language?.map((item) => {
      if (Object.keys(item)?.toString() === currentLanguage) {
        let bodyVariable = {};
        let quickReplyVariables = {};
        let callToActionVariables = {};

        if (selectedBodyVariable?.length > 0) {
          for (const property in state) {
            const filterBodyVariable = selectedBodyVariable?.filter(
              (item) => item?.label === property,
            );
            if (filterBodyVariable?.length > 0) {
              `${property}: ${state[property]}`;
              bodyVariable = Object.assign(bodyVariable, { [property]: state[property] });
            }
          }
        }

        if (quickReplyButtons?.length > 0) {
          for (const property in state) {
            const quickReply = quickReplyButtons?.filter((item) => item === property);
            if (quickReply?.length > 0) {
              `${property}: ${state[property]}`;
              quickReplyVariables = Object.assign(quickReplyVariables, {
                [property]: state[property],
              });
            }
          }
        }

        if (callToActionButtons?.length > 0) {
          for (const property in state) {
            const callToAction = callToActionButtons?.filter((item) => item === property);
            if (callToAction?.length > 0) {
              `${property}: ${state[property]}`;
              callToActionVariables = Object.assign(callToActionVariables, {
                [property]: state[property],
              });
            }
          }
        }

        const data = {
          [Object.keys(item)?.toString()]: Object.assign(
            {},
            state?.headerText && { header: state?.headerText, headerType: 'text' },
            state?.image && { header: state?.image, headerType: 'image' },
            state?.video && { header: state?.video, headerType: 'video' },
            state?.document && { header: state?.document, headerType: 'document' },
            selectedHeaderVariable?.label && {
              [selectedHeaderVariable?.label]: state?.[selectedHeaderVariable?.label],
              headerVariableLabel: selectedHeaderVariable?.label,
              headerVariableValue: state?.[selectedHeaderVariable?.label],
            },
            state?.body && { body: state?.body },
            state?.footerText && { footer: state?.footerText },
            selectedBodyVariable?.length > 0 && { bodyVariables: bodyVariable },
            quickReplyButtons?.length > 0 && { quickReplyVariables: quickReplyVariables },
            callToActionButtons?.length > 0 && { callToActionVariables: callToActionVariables },
          ),
        };

        return data;
      } else return item;
    });

    dispatch(updateTemplateDetails({ ...templateField, language: formDetails }));
  }, [form, state]);

  useEffect(() => {
    const activeData = templateField?.language?.filter(
      (data) => Object.keys(data)?.toString() === currentLanguage,
    );
    let stateData = {};

    if (activeData?.length > 0) {
      const objectData = activeData[0]?.[currentLanguage];
      const assignHeader = Object.assign(
        {},
        objectData?.headerType === 'text' &&
          objectData?.header && {
            headerText: activeData[0]?.[currentLanguage]?.header,
          },
        objectData?.headerType === 'image' &&
          objectData?.header && {
            image: activeData[0]?.[currentLanguage]?.header,
          },
        objectData?.headerType === 'video' &&
          objectData?.header && {
            video: activeData[0]?.[currentLanguage]?.header,
          },
        objectData?.headerType === 'document' &&
          objectData?.header && {
            document: activeData[0]?.[currentLanguage]?.header,
          },
      );
      switch (objectData?.headerType) {
        case 'text':
          setSelectedHeaderType('Text');
          break;
        case 'image':
        case 'video':
        case 'document':
          setSelectedHeaderType('Media');
          break;
        default:
          setSelectedHeaderType('None');
          break;
      }
      stateData = Object.assign(
        assignHeader,
        {
          body: objectData?.body || '',
          footerText: objectData?.footer || '',
        },
        objectData?.headerVariableLabel && {
          [objectData?.headerVariableLabel]: objectData?.headerVariableValue,
        },
        objectData?.bodyVariables && objectData?.bodyVariables,
        objectData?.quickReplyVariables && objectData?.quickReplyVariables,
        objectData?.callToActionVariables && objectData?.callToActionVariables,
      );

      // assigning Header variable
      objectData?.headerVariableLabel
        ? setSelectedHeaderVariable({
            label: objectData?.headerVariableLabel,
            value: objectData?.headerVariableLabel,
          })
        : setSelectedHeaderVariable({});
      form.setFieldsValue({
        [objectData?.headerVariableLabel]: objectData?.headerVariableValue,
      });

      //assign body
      const contentState = ContentState.createFromText(
        activeData[0]?.[currentLanguage]?.body || '',
      );
      const initialEditorState = EditorState.createWithContent(contentState);

      let bodyState = activeData[0]?.[currentLanguage]?.body
        ? initialEditorState
        : EditorState.createEmpty();

      setEditorState(bodyState);

      //assign body variable
      if (objectData?.bodyVariables) {
        let bodyVariablesObject = [];
        for (const property in objectData?.bodyVariables) {
          bodyVariablesObject.push({ label: property, value: `{{${property}}}` });
          form.setFieldsValue({
            [property]: objectData?.bodyVariables[property],
          });
        }
        setSelectedBodyVariable(bodyVariablesObject);
      } else {
        setSelectedBodyVariable([]);
      }

      //assign buttons
      if (objectData?.quickReplyVariables) {
        setQuickReplyButtons(Object.keys(objectData?.quickReplyVariables));
        for (const property in objectData?.quickReplyVariables) {
          form.setFieldsValue({
            [property]: objectData?.quickReplyVariables[property],
          });
        }
      } else {
        setQuickReplyButtons([]);
      }
      if (objectData?.callToActionVariables) {
        setCallToActionButtons(Object.keys(objectData?.callToActionVariables));

        for (const property in objectData?.callToActionVariables) {
          form.setFieldsValue({
            [property]: objectData?.callToActionVariables[property]?.name,
          });
          property?.startsWith('websiteButton') &&
            setFormFieldValue(`${property}-url`, objectData?.callToActionVariables[property]?.url);

          property?.startsWith('numberButton') &&
            setFormFieldValue(
              `${property}-number`,
              objectData?.callToActionVariables[property]?.number,
            );
        }
      } else {
        setCallToActionButtons([]);
      }
    }
    setState(stateData);
  }, [currentLanguage]);

  const submitTemplate = (selectedTemplates) => {
    templateField?.language?.map((eachTemplateData) => {
      let body;
      let addObj = [];
      let addCallToAction = [];
      let addQuickReply = [];
      let getBodyVariableValues = [];
      let currentLang = Object.keys(eachTemplateData)?.toString();

      const selectedTemplate = selectedTemplates?.filter(
        (item) => item?.language === currentLang && !item?.fieldError,
      );

      if (selectedTemplate?.length > 0) {
        if (eachTemplateData?.[currentLang]?.bodyVariables) {
          for (let property in eachTemplateData?.[currentLang]?.bodyVariables) {
            getBodyVariableValues.push(eachTemplateData?.[currentLang]?.bodyVariables[property]);
          }
        }

        if (eachTemplateData?.[currentLang]?.quickReplyVariables) {
          for (let property in eachTemplateData?.[currentLang]?.quickReplyVariables) {
            addQuickReply.push({
              type: 'QUICK_REPLY',
              text: eachTemplateData?.[currentLang]?.quickReplyVariables[property],
            });
          }
        }

        if (eachTemplateData?.[currentLang]?.callToActionVariables) {
          for (const property in eachTemplateData?.[currentLang]?.callToActionVariables) {
            property?.startsWith('numberButton') &&
              addCallToAction.push({
                type: 'PHONE_NUMBER',
                text: eachTemplateData?.[currentLang]?.callToActionVariables[property]?.name,
                phone_number:
                  eachTemplateData?.[currentLang]?.callToActionVariables[property]?.number,
              });

            property?.startsWith('websiteButton') &&
            eachTemplateData?.[currentLang]?.callToActionVariables[property]?.sample_url
              ? addCallToAction.push({
                  type: 'URL',
                  text: eachTemplateData?.[currentLang]?.callToActionVariables[property]?.name,
                  url: eachTemplateData?.[currentLang]?.callToActionVariables[property]?.url,
                  example: [
                    eachTemplateData?.[currentLang]?.callToActionVariables[property]?.sample_url,
                  ],
                })
              : property?.startsWith('websiteButton') &&
                addCallToAction.push({
                  type: 'URL',
                  text: eachTemplateData?.[currentLang]?.callToActionVariables[property]?.name,
                  url: eachTemplateData?.[currentLang]?.callToActionVariables[property]?.url,
                });

            property?.startsWith('offerCodeButton') &&
              addCallToAction.push({
                type: 'COPY_CODE',
                text: 'Copy offer code',
                example: [eachTemplateData?.[currentLang]?.callToActionVariables[property]?.name],
              });
          }
        }

        eachTemplateData?.[currentLang]?.headerType === 'text' &&
        eachTemplateData?.[currentLang]?.headerVariableValue
          ? addObj.push({
              type: 'HEADER',
              format: 'TEXT',
              text: eachTemplateData?.[currentLang]?.header,
              example: {
                header_text: [eachTemplateData?.[currentLang]?.headerVariableValue],
              },
            })
          : eachTemplateData?.[currentLang]?.headerType === 'text' &&
            addObj.push({
              type: 'HEADER',
              format: 'TEXT',
              text: eachTemplateData?.[currentLang]?.header,
            });

        eachTemplateData?.[currentLang]?.headerType === 'image' &&
          addObj.push({
            type: 'HEADER',
            format: 'IMAGE',
            example: {
              header_handle: [eachTemplateData?.[currentLang]?.header],
            },
          });

        eachTemplateData?.[currentLang]?.headerType === 'video' &&
          addObj.push({
            type: 'HEADER',
            format: 'VIDEO',
            example: {
              header_handle: [eachTemplateData?.[currentLang]?.header],
            },
          });

        eachTemplateData?.[currentLang]?.headerType === 'document' &&
          addObj.push({
            type: 'HEADER',
            format: 'DOCUMENT',
            example: {
              header_handle: [eachTemplateData?.[currentLang]?.header],
            },
          });

        eachTemplateData?.[currentLang]?.bodyVariables && getBodyVariableValues?.length > 0
          ? addObj.push({
              type: 'BODY',
              text: eachTemplateData?.[currentLang]?.body,
              example: {
                body_text: [getBodyVariableValues],
              },
            })
          : eachTemplateData?.[currentLang]?.body &&
            addObj.push({
              type: 'BODY',
              text: eachTemplateData?.[currentLang]?.body,
            });

        eachTemplateData?.[currentLang]?.footer &&
          addObj.push({
            type: 'FOOTER',
            text: eachTemplateData?.[currentLang]?.footer,
          });

        eachTemplateData?.[currentLang]?.quickReplyVariables &&
          addQuickReply?.length > 0 &&
          addObj.push({
            type: 'BUTTONS',
            buttons: addQuickReply,
          });

        eachTemplateData?.[currentLang]?.callToActionVariables &&
          addCallToAction?.length > 0 &&
          addObj.push({
            type: 'BUTTONS',
            buttons: addCallToAction,
          });

        body = Object.assign(
          {},
          {
            brand_id: currentBrand?.id,
            template_name: templateField?.templateName,
            save_as_draft: false,
            language: getLanguageCode(Object.keys(eachTemplateData)?.toString()),
            category: templateName?.templateName === 'Marketing' ? 'MARKETING' : 'UTILITY',
            components: addObj,
          },
        );
        // console.log('body', body);
        createAndUpdateTemplate(body).then((res) => {
          if (res?.status === 200) {
            // console.log('createAndUpdateTemplate', res);
          } else {
            console.log('error', res);
          }
        });
      }
    });
  };
  // console.log('state', state);

  const getNumberOfButtons = (type) => {
    return Object.keys(state)?.filter((each) => each?.includes(type));
  };

  const handleShowAddVariableOptions = (type) => {
    if (showAddVariableOptions?.includes(type)) {
      setShowAddVariableOptions(showAddVariableOptions?.filter((each) => each !== type));
    } else {
      setShowAddVariableOptions([...showAddVariableOptions, type]);
    }
  };

  const onClickOfButtons = (buttonType) => {
    let existingButton = getNumberOfButtons(buttonType);
    if (
      ['marketingButton', 'numberButton', 'formButton', 'offerCodeButton'].includes(buttonType) &&
      existingButton?.length !== 1
    ) {
      setState({
        ...state,
        [buttonType]: {},
      });
      if (buttonType === 'marketingButton') {
        setQuickReplyButtons([...quickReplyButtons, 'marketingButton']);
      } else {
        setCallToActionButtons([...callToActionButtons, buttonType]);
      }
      setFormFieldValue(buttonType, '');
      setFormFieldValue(`${buttonType}-number`, '');

      setShowAddButtonsOptions(!showAddButtonsOptions);
    }

    if (buttonType === 'customButton' && existingButton?.length < 10) {
      setQuickReplyButtons([...quickReplyButtons, `customButton-${existingButton?.length + 1}`]);
      setState({
        ...state,
        [`customButton-${existingButton?.length + 1}`]: '',
      });
      setFormFieldValue(`customButton-${existingButton?.length + 1}`, '');
      setShowAddButtonsOptions(!showAddButtonsOptions);
    }

    if (buttonType === 'websiteButton' && existingButton?.length < 2) {
      setState({
        ...state,
        [`websiteButton-${existingButton?.length + 1}`]: {},
      });
      setCallToActionButtons([
        ...callToActionButtons,
        `websiteButton-${existingButton?.length + 1}`,
      ]);
      setFormFieldValue(`websiteButton-${existingButton?.length + 1}`, '');
      setFormFieldValue(`websiteButton-${existingButton?.length + 1}-url`, '');
      setShowAddButtonsOptions(!showAddButtonsOptions);
    }
  };

  const setFormFieldValue = (fieldName, fieldValue) => {
    form.setFieldsValue({
      [fieldName]: fieldValue,
    });
  };

  const handleImageUpload = useCallback(
    async (e) => {
      const selectedImage = e.target.files[0];
      setFileLoader(true);
      const responseFile = await uploadFile(e.target.files[0]);

      if (responseFile) {
        if (selectedImage.size < 5 * 1024 * 1024) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setState({
              ...state,
              image: responseFile,
            });
            setFileLoader(false);
          };
          setSelectedFileName(selectedImage?.name);
          reader.readAsDataURL(selectedImage);
          setErrorMsg({});
        } else {
          setErrorMsg({
            image: 'Image size should be less than 5MB',
          });
        }
      }
    },
    [state],
  );

  const handleVideoUpload = useCallback(
    async (e) => {
      const selectedVideo = e.target.files[0];
      setFileLoader(true);
      const responseFile = await uploadFile(e.target.files[0]);

      if (responseFile) {
        if (selectedVideo.size < 16 * 1024 * 1024) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setState({
              ...state,
              video: responseFile,
            });
            setFileLoader(false);
          };
          setSelectedFileName(selectedVideo?.name);
          reader.readAsDataURL(selectedVideo);
          setErrorMsg({});
        } else {
          setErrorMsg({ video: 'Video size should be less than 16MB' });
        }
      }
    },
    [state],
  );

  const handleDocumentUpload = useCallback(
    async (e) => {
      const selectedDoc = e.target.files[0];
      setFileLoader(true);
      const responseFile = await uploadFile(e.target.files[0]);

      if (responseFile) {
        if (selectedDoc.size < 100 * 1024 * 1024) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setState({
              ...state,
              document: responseFile,
            });
            setFileLoader(false);
          };
          setSelectedFileName(selectedDoc?.name);
          reader.readAsDataURL(selectedDoc);
          setErrorMsg({});
        } else {
          setErrorMsg({ document: 'Document size should be less than 100MB' });
        }
      }
    },
    [state],
  );

  const onClickOfMedia = useCallback(
    (type) => {
      const filterExisting = ['image', 'video', 'document']?.filter((each) => each !== type);
      let newState = { ...state };
      filterExisting?.forEach((each) => {
        delete newState?.[each];
      });
      setState({ ...newState, [type]: '' });
      setSelectedFileName(null);
      setErrorMsg({});
    },
    [state],
  );

  const isMediaSelected = (type) => {
    return Object?.keys(state).includes(type);
  };

  const handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      setEditorState(newState);
      return 'handled';
    }

    return 'not-handled';
  };

  const mapKeyToEditorCommand = (e) => {
    if (e.key === 'b' && e.metaKey) {
      return 'bold';
    }
    if (e.key === 'i' && e.metaKey) {
      return 'italic';
    }
    if (e.key === 's' && e.metaKey) {
      return 'strikethrough';
    }
    return getDefaultKeyBinding(e);
  };

  const onEditorChange = (newState) => {
    setEditorState(newState);
    setShowEmojiPicker(false);

    const content = newState.getCurrentContent();
    const rawObject = convertToRaw(content);
    const markdownString = draftToMarkdown(rawObject);

    const filterSampleContent = selectedBodyVariable?.filter((each) =>
      markdownString.includes(each?.value),
    );

    setSelectedBodyVariable(filterSampleContent);
    setState({
      ...state,
      body: markdownString,
    });
  };

  const handleToolbarClick = (style) => {
    const newState = RichUtils.toggleInlineStyle(editorState, style);
    setEditorState(newState);
  };

  const handleEmojiClick = (emoji) => {
    const contentState = editorState.getCurrentContent();
    const selection = editorState.getSelection();

    if (selection.isCollapsed()) {
      const contentStateWithEmoji = contentState.createEntity('emoji', 'IMMUTABLE', {
        emoji: emoji.native,
      });
      const entityKey = contentStateWithEmoji.getLastCreatedEntityKey();

      const contentStateWithEntity = Modifier.insertText(
        contentStateWithEmoji,
        selection,
        emoji.native,
        null,
        entityKey,
      );

      const newEditorStateWithEntity = EditorState.push(
        editorState,
        contentStateWithEntity,
        'insert-fragment',
      );
      setEditorState(newEditorStateWithEntity);
      setShowEmojiPicker(false);
    }
  };

  const processEmptyParagraphs = (rawObject) => {
    const blocks = rawObject.blocks.map((block) => {
      if (block.text.trim() === '') {
        return { ...block, text: '\n' };
      }
      return block;
    });
    return { ...rawObject, blocks };
  };

  const convertToHTML = (contentState) => {
    const rawObject = convertToRaw(contentState);
    const processedObject = processEmptyParagraphs(rawObject);
    return draftToHtml(processedObject);
  };

  const concatenateText = (text) => {
    const currentContent = editorState.getCurrentContent();
    const newContentState = ContentState.createFromText(`${currentContent.getPlainText()} ${text}`);
    return EditorState.push(editorState, newContentState, 'insert-fragment');
  };

  const onDragEndOfQuickReply = (result) => {
    if (!result.destination) return;
    const newItems = quickReplyButtons.filter((each) => each !== 'marketingButton');
    const [removed] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, removed);
    if (quickReplyButtons?.includes('marketingButton')) {
      newItems.push('marketingButton');
    }
    setQuickReplyButtons(newItems);
  };

  const onDragEndOfActionCall = (result) => {
    if (!result.destination) return;
    const newItems = callToActionButtons;
    const [removed] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, removed);
    setCallToActionButtons(newItems);
    const reorderedObject = {
      ...Object.fromEntries(newItems.map((key) => [key, state[key]])),
      ...Object.fromEntries(
        Object.keys(state)
          .filter((key) => !newItems.includes(key))
          .map((key) => [key, state[key]]),
      ),
    };
    setState(reorderedObject);
  };

  const buttonList = () => {
    BUTTONS_LIST?.map((each) => {
      each.disabled = !(getNumberOfButtons(each?.label)?.length < each?.length);
      return each;
    });
    return BUTTONS_LIST;
  };

  const onChangeOfCTASelect = useCallback(
    (val, pos) => {
      if (val?.value !== 'Complete form') {
        const toRemove = callToActionButtons[pos];

        const newState = { ...state };
        delete newState?.[toRemove];
        if (val?.label === 'websiteButton') {
          const filterWebBtn = getNumberOfButtons('websiteButton');
          if (!getNumberOfButtons('websiteButton')?.length) {
            setState({
              ...newState,
              [`${val?.label}-${getNumberOfButtons('websiteButton')?.length + 1}`]: {},
            });
            callToActionButtons[pos] =
              val?.label + '-' + (getNumberOfButtons('websiteButton')?.length + 1);
          } else {
            if (
              filterWebBtn?.includes(
                `${val?.label}-${getNumberOfButtons('websiteButton')?.length + 1}`,
              )
            ) {
              setState({
                ...newState,
                [`${val?.label}-${getNumberOfButtons('websiteButton')?.length}`]: {},
              });
              callToActionButtons[pos] =
                val?.label + '-' + getNumberOfButtons('websiteButton')?.length;
            } else {
              setState({
                ...newState,
                [`${val?.label}-${getNumberOfButtons('websiteButton')?.length + 1}`]: {},
              });
              callToActionButtons[pos] =
                val?.label + '-' + (getNumberOfButtons('websiteButton')?.length + 1);
            }
          }
        } else {
          setState({ ...newState, [val?.label]: {} });
          callToActionButtons[pos] = val?.label;
        }
      }
    },

    [state],
  );

  const AddButtonsOption = () => {
    return (
      <div className='AddButtonOptionContainer'>
        <div className='buttonsHeader'>Quick reply buttons</div>
        <div
          className={`${
            selectedCategory?.value === 'Marketing' && !getNumberOfButtons('marketing')?.length
              ? 'optionItem '
              : 'optionItem optionItemDisable'
          }`}
          onClick={() =>
            selectedCategory?.value === 'Marketing' && onClickOfButtons('marketingButton')
          }>
          Marketing opt-out
          <span>Recommended</span>
        </div>

        <div
          className='optionItem mb-10'
          onClick={() => onClickOfButtons('customButton')}>
          Custom
        </div>

        <Divider
          color={'var( --border-50)'}
          width='100%'
        />

        <div className='buttonsHeader mt-10'>Call-to-action buttons</div>

        <div
          className={`${
            getNumberOfButtons('websiteButton')?.length === 2 ? 'optionItemDisable' : ''
          } optionItem`}
          onClick={() => onClickOfButtons('websiteButton')}>
          Visit website
          <span>2 buttons maximum</span>
        </div>

        <div
          className={`${
            getNumberOfButtons('numberButton')?.length ? 'optionItemDisable' : ''
          } optionItem`}
          onClick={() => onClickOfButtons('numberButton')}>
          Call Phone Number <span>1 button maximum</span>
        </div>

        <div
          className={`${
            getNumberOfButtons('formButton')?.length ? '' : 'optionItemDisable'
          } optionItem`}
          // onClick={() => onClickOfButtons("formButton")}
        >
          Complete Form <span>1 button maximum</span>
        </div>

        <div
          className={`${
            getNumberOfButtons('offerCodeButton')?.length ? 'optionItemDisable' : ''
          } optionItem`}
          onClick={() => onClickOfButtons('offerCodeButton')}>
          Copy Offer Code <span>1 button maximum</span>
        </div>
      </div>
    );
  };

  const onFinish = () => {
    if (submitEnabled) {
      setShowSubmitModal(true);
    }
  };

  const updateLanguage = (lang) => {
    const selectedVal = lang?.value;
    dispatch(
      updateTemplateDetails({
        ...templateField,
        language: [...templateField?.language, { [selectedVal]: {} }],
      }),
    );
    setSelectedLanguages([...selectedLanguages, lang?.value]);
  };

  const updateTemplateName = (val) => {
    setTemplateName(val);
    dispatch(
      updateTemplateDetails({
        ...templateField,
        templateName: val,
      }),
    );
    checkTemplateExits(currentBrand?.id, val).then((res) => {
      if (res?.status === 200) {
        setTemplateNameError(res?.data?.exists);
      }
    });
  };

  const updateCategory = (val) => {
    setSelectedCategory(val);
    dispatch(
      updateTemplateDetails({
        ...templateField,
        category: val?.value,
      }),
    );
  };

  const validateURL = (_, value) => {
    if (value && !/^https?:\/\/([a-z0-9.-]+)\.([a-z]{2,})(\/.*)?$/i.test(value)) {
      return Promise.reject('Invalid URL format');
    }
    return Promise.resolve();
  };

  const mobileValidateURL = (_, value) => {
    if (value && /^[789]\d{9}$/i.test(value)) {
      return Promise.resolve();
    }
    return Promise.reject('Please enter india phone number');
  };

  // console.log('mobileValidateURL', mobileValidateURL());

  const handleDiscard = () => {
    dispatch(updateTemplateDetails({}));
    setState({ body: '' });
    navigate('/user/channels/whatsapp');
  };

  return (
    <div className='templateDetailsContainer'>
      {showSubmitModal && (
        <TemplateSubmitModal
          setShowSubmitModal={setShowSubmitModal}
          selectedLanguages={selectedLanguages}
          fieldValidateLang={templateField?.language}
          submit={submitTemplate}
        />
      )}
      <Form
        form={form}
        onFinish={onFinish}>
        <div style={{ height: 'auto', marginBottom: '5%' }}>
          <div className='templateHeader'>
            <div className='templateTitleContainer'>
              {!editTemplateName ? (
                <EllipsisComponent
                  text={templateName}
                  maxLength={45}
                />
              ) : (
                <div className='templateNameWrapper '>
                  <input
                    autoFocus
                    type='text'
                    value={templateName}
                    className='templateNameInput mt-10 pt-10'
                    onChange={(e) => updateTemplateName(e.target.value)}
                  />
                  {templateNameError && <div className='TemplateError '>Name already exits</div>}
                </div>
              )}
              <div
                className='pointer'
                onClick={() => !templateNameError && setEditTemplateName(!editTemplateName)}>
                {editTemplateName ? (
                  <img
                    src={ICONS?.greenTickVerticalSteps}
                    alt='confirm'
                  />
                ) : (
                  <PencilIcon
                    color='#25C277'
                    width='22'
                    height='22'
                  />
                )}
              </div>
              <div className='categorySwitcherContainer'>
                <div>Category</div>
                <Select
                  className='select'
                  placeholder='Select Category'
                  options={CATEGORIES_OPTIONS}
                  value={selectedCategory?.value}
                  onChange={(value) => updateCategory(value)}
                />
              </div>
            </div>
            <div className='templateButtonContainer'>
              <Button
                type='button'
                className='btn discardBtn'
                size={'medium'}
                label='Discard'
                onClick={() => handleDiscard()}
              />

              <Button
                className={`btn ${submitEnabled ? 'submitBtn' : 'disableSubmit'} `}
                size={'medium'}
                type='submit'
                label='Submit'
              />
            </div>
          </div>

          <div className='detailsContainer'>
            <div className='templatePrevContainer'>
              <div className={'messagePreviewContainer'}>
                <div className='msgPrevTitle'>Message Preview</div>
                <div className='messagePrev leftTop'>
                  <div className='messagePrevContent'>
                    {selectedHeaderType === 'Media' ? (
                      <>
                        {state?.image && (
                          <img
                            alt='imgPrev'
                            className='imagePreview'
                            src={state?.image}
                          />
                        )}
                        {state?.video && (
                          <video
                            controls
                            className='videoPreview'>
                            <source
                              src={state?.video}
                              type='video/mp4'
                            />
                          </video>
                        )}
                        {state?.document && (
                          <iframe
                            title='cover'
                            className='imagePreview'
                            src={state?.document}
                            type='application/pdf'
                            width='100%'
                            height='150px'></iframe>
                        )}
                      </>
                    ) : (
                      <p className='previewHeaderText'>
                        {state?.[selectedHeaderVariable?.label]
                          ? replaceWord(state?.headerText, state?.[selectedHeaderVariable?.label])
                          : state?.headerText}
                      </p>
                    )}
                    <p
                      dangerouslySetInnerHTML={{
                        __html: convertToHTML(editorState?.getCurrentContent()),
                      }}></p>
                    <p className='footerText'>{state?.footerText}</p>
                  </div>
                  <div>
                    {quickReplyButtons
                      ?.filter((btn) => btn !== 'marketingButton')
                      ?.map((eachButton, index) => {
                        if (index < 2) {
                          return (
                            <div className='linkButtonContainer'>
                              <img
                                src={ICONS?.shareLink}
                                alt='shareBtn'
                              />
                              {state?.[eachButton]}
                            </div>
                          );
                        } else if (index > 1 && getNumberOfButtons('Button')?.length < 4) {
                          return (
                            <div className='linkButtonContainer'>
                              <img
                                src={ICONS?.shareLink}
                                alt='shareBtn'
                              />
                              {state?.[eachButton]}
                            </div>
                          );
                        }
                      })}
                    {callToActionButtons?.map((eachButton, index) => {
                      if (
                        index <
                          3 -
                            quickReplyButtons?.filter((btn) => btn !== 'marketingButton')?.length &&
                        getNumberOfButtons('Button')?.length < 4
                      ) {
                        return (
                          <div className='linkButtonContainer'>
                            {eachButton?.includes('website') && (
                              <img
                                src={ICONS?.nounLink}
                                alt='shareBtn'
                              />
                            )}
                            {eachButton?.includes('number') && (
                              <img
                                src={ICONS?.call}
                                alt='shareBtn'
                              />
                            )}
                            {eachButton?.includes('offerCode') && (
                              <img
                                src={ICONS?.CopyLeft}
                                alt='shareBtn'
                              />
                            )}
                            {state?.[eachButton]?.name}
                          </div>
                        );
                      }
                      if (
                        index <
                          2 -
                            quickReplyButtons?.filter((btn) => btn !== 'marketingButton')?.length &&
                        getNumberOfButtons('Button')?.length > 3
                      ) {
                        return (
                          <div className='linkButtonContainer'>
                            {eachButton?.includes('website') && (
                              <img
                                src={ICONS?.nounLink}
                                alt='shareBtn'
                              />
                            )}
                            {eachButton?.includes('number') && (
                              <img
                                src={ICONS?.call}
                                alt='shareBtn'
                              />
                            )}
                            {eachButton?.includes('offerCode') && (
                              <img
                                src={ICONS?.CopyLeft}
                                alt='shareBtn'
                              />
                            )}
                            {state?.[eachButton]?.name}
                          </div>
                        );
                      }
                    })}
                    {getNumberOfButtons('Button')?.length > 3 && (
                      <div
                        className='linkButtonContainer pointer'
                        onClick={() => setDrawer(true)}>
                        <List
                          color='#4AACEA'
                          width='22'
                          height='21'
                        />
                        See all options
                      </div>
                    )}
                  </div>
                </div>
                <Drawer
                  placement='bottom'
                  closable={false}
                  onClose={() => setDrawer(false)}
                  open={drawer}
                  getContainer={false}
                  rootClassName='custom-drawer'
                  className='custom-content'>
                  <div className='drawerContainer'>
                    <div className='drawerHolder'></div>
                    <div className='drawerHeader'>
                      <div
                        className='pointer'
                        onClick={() => setDrawer(false)}>
                        <CloseIcon
                          stroke='#fff'
                          fill='#616874'
                        />
                      </div>
                      <div>All Options</div>
                    </div>
                    <div className='drawerQuickReplyButtons'>
                      {quickReplyButtons
                        ?.filter((btn) => btn !== 'marketingButton')
                        ?.map((eachButton) => (
                          <div className='drawerButton'>
                            <img
                              src={ICONS?.shareLink}
                              alt='shareBtn'
                            />
                            {state?.[eachButton]}
                          </div>
                        ))}
                    </div>
                    <div className='drawerCallToActionsButtons'>
                      {callToActionButtons?.map((eachButton) => (
                        <div className='drawerButton'>
                          {eachButton?.includes('website') && (
                            <img
                              src={ICONS?.nounLink}
                              alt='shareBtn'
                            />
                          )}
                          {eachButton?.includes('number') && (
                            <img
                              src={ICONS?.call}
                              alt='shareBtn'
                            />
                          )}
                          {eachButton?.includes('offerCode') && (
                            <img
                              src={ICONS?.CopyLeft}
                              alt='shareBtn'
                            />
                          )}
                          {state?.[eachButton]?.name}
                        </div>
                      ))}
                    </div>
                  </div>
                </Drawer>
              </div>
            </div>

            <div className='detailsBodyContainer'>
              <div className='headerTitleVariableContainer'>
                <div>
                  <div className='font-medium weight-bold'>
                    Header
                    <span className='font-sm weight-semibold'> (Optional) </span>
                  </div>

                  <div className='descText mt-5 mb-5'>
                    Add a title or choose which type of media you'll use for this header
                  </div>
                </div>

                {selectedHeaderType === 'Text' && (
                  <Button
                    type='button'
                    label={'Add variable'}
                    iconPrefix={ICONS?.addBGwhite}
                    useRightImage1Class={true}
                    disabled={selectedHeaderVariable?.value}
                    className={selectedHeaderVariable?.value ? 'buttonDisable addBtn' : 'addBtn'}
                    onClick={() => handleShowAddVariableOptions('header')}
                  />
                )}

                {showAddVariableOptions?.includes('header') && (
                  <div className='AddVariableOptions'>
                    {ADD_VARIABLE_OPTIONS?.map((item) => (
                      <div
                        key={item?.id}
                        className='dropdown-1'>
                        <DropDown
                          title={item?.label}
                          onClick={() => {
                            setState({
                              ...state,
                              headerText: state?.headerText + item?.value,
                              [`${item?.label}`]: '',
                            });
                            form.setFieldsValue({
                              [item?.label]: '',
                            });
                            setSelectedHeaderVariable(item);
                            handleShowAddVariableOptions('header');
                          }}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className='flex space-between align-center mb-15 mt-10'>
                <div className='headerSelect'>
                  <Select
                    options={HEADER_OPTIONS}
                    value={selectedHeaderType}
                    parentName='template'
                    onChange={({ value }) => {
                      if (value === 'Text') {
                        // after outSource
                        delete state?.document;
                        delete state?.video;
                        delete state?.image;
                        setState({
                          ...state,
                          headerText: '',
                        });
                      } else {
                        const { headerText, ...otherState } = state;
                        setState(otherState);
                      }
                      setSelectedHeaderType(value);
                      setSelectedHeaderVariable();
                    }}
                  />
                </div>

                {selectedHeaderType === 'Text' && (
                  <CustomTextArea
                    className='w-80 templateHeaderInput'
                    placeholder={'Enter text'}
                    maxLength={60}
                    rows={1}
                    customCount={true}
                    autoSize={{ maxRows: 1 }}
                    textAreaClass='templateHeaderTextArea'
                    value={state?.headerText}
                    onChange={(e) => {
                      const filterVarPresent = ADD_VARIABLE_OPTIONS.filter(({ value }) =>
                        e.target.value?.includes(value),
                      );
                      if (filterVarPresent?.length) {
                        setState({
                          ...state,
                          headerText: e.target.value,
                          [filterVarPresent[0]?.label]: state?.[filterVarPresent[0]?.label]
                            ? state?.[filterVarPresent[0]?.label]
                            : '',
                        });
                        setSelectedHeaderVariable(filterVarPresent[0]);
                      } else {
                        let newState = { ...state };
                        delete newState?.[selectedHeaderVariable?.label];
                        newState = {
                          ...newState,
                          headerText: e.target.value,
                        };
                        setState(newState);
                        setSelectedHeaderVariable();
                      }
                    }}
                  />
                )}
              </div>

              {selectedHeaderVariable?.value && (
                <div className='ml-20 mt-10'>
                  <h2 className='font-small weight-bold mt-5'>Samples for header content</h2>

                  <div className='flex-row align-center mt-10 mb-10 sampleHeaderVariableInput'>
                    <h6 className='weight-medium'>{selectedHeaderVariable?.value}</h6>
                    <Form.Item
                      name={selectedHeaderVariable?.label}
                      className='w-100 h-100'
                      rules={[
                        {
                          required: true,
                          message: '*Required',
                        },
                      ]}>
                      <CustomTextArea
                        placeholder={'Enter sample content'}
                        rows={1}
                        autoSize={{ minRows: 1, maxRows: 1 }}
                        textAreaClass='templateHeaderTextArea'
                        value={state?.[selectedHeaderVariable?.label]}
                        onChange={(e) =>
                          setState({
                            ...state,
                            [selectedHeaderVariable?.label]: e.target.value,
                          })
                        }
                      />
                    </Form.Item>
                  </div>
                </div>
              )}

              {selectedHeaderType === 'Media' && (
                <div className='mediaContainer'>
                  <div
                    className={`mediaItem ${isMediaSelected('image') ? 'mediaItemSelected' : ''}`}
                    onClick={() => onClickOfMedia('image')}>
                    <ImageSvg
                      color={`${isMediaSelected('image') ? '#25C277' : '#2D3036'}`}
                      bgColor={`${isMediaSelected('image') ? '#F0FDF4' : '#f0f1f2'}`}
                    />

                    <div className='font-sm weight-semibold'>Image</div>

                    <div className='mediaSelectedCheck'>
                      {isMediaSelected('image') && (
                        <Circlecheck
                          circleColor='#25C277'
                          rectColor='#fff'
                          color='#fff'
                        />
                      )}
                    </div>
                  </div>

                  <div
                    className={`mediaItem ${isMediaSelected('video') ? 'mediaItemSelected' : ''}`}
                    onClick={() => onClickOfMedia('video')}>
                    <VideoSvg
                      color={`${isMediaSelected('video') ? '#25C277' : '#2D3036'}`}
                      bgColor={`${isMediaSelected('video') ? '#F0FDF4' : '#f0f1f2'}`}
                    />

                    <div className='font-sm weight-semibold'>Video</div>

                    <div className='mediaSelectedCheck'>
                      {isMediaSelected('video') && (
                        <Circlecheck
                          circleColor='#25C277'
                          rectColor='#fff'
                          color='#fff'
                        />
                      )}
                    </div>
                  </div>

                  <div
                    className={`mediaItem ${
                      isMediaSelected('document') ? 'mediaItemSelected' : ''
                    }`}
                    onClick={() => onClickOfMedia('document')}>
                    <DocSvg
                      color={`${isMediaSelected('document') ? '#25C277' : '#2D3036'}`}
                      bgColor={`${isMediaSelected('document') ? '#F0FDF4' : '#f0f1f2'}`}
                    />

                    <div className='font-sm weight-semibold'>Document</div>

                    <div className='mediaSelectedCheck'>
                      {isMediaSelected('document') && (
                        <Circlecheck
                          circleColor='#25C277'
                          rectColor='#fff'
                          color='#fff'
                        />
                      )}
                    </div>
                  </div>
                </div>
              )}

              {selectedHeaderType === 'Media' && (
                <>
                  <h2 className='font-small weight-bold mt-5 mb-20'>Samples for header content</h2>

                  {!selectedFileName && (
                    <>
                      {isMediaSelected('image') && (
                        <div className='flex align-center mb-20'>
                          <input
                            type='file'
                            accept='.jpg, .png'
                            onChange={handleImageUpload}
                            id='uploadImg'
                            hidden
                          />

                          <label
                            for='uploadImg'
                            className='uploadBtn'>
                            {fileLoader ? (
                              <div className='loaderWrapper flex-row align-center justify-center '>
                                <Loader
                                  Width='20px'
                                  Height='20px'
                                  loaderBg='3px solid white'
                                  loaderColor='3px solid var(--primary)'
                                />
                              </div>
                            ) : (
                              <>
                                <ImageSvg
                                  color='#fff'
                                  bgColor='#25c277'
                                />
                                Choose jpg or png
                              </>
                            )}
                          </label>

                          <div className='descText ml-20'>Image size should be less than 5MB</div>
                        </div>
                      )}

                      {isMediaSelected('video') && (
                        <div className='flex align-center mb-20'>
                          <input
                            type='file'
                            accept='.mp4'
                            onChange={handleVideoUpload}
                            id='uploadImg'
                            hidden
                          />

                          <label
                            for='uploadImg'
                            className='uploadBtn'>
                            {fileLoader ? (
                              <div className='loaderWrapper flex-row align-center justify-center '>
                                <Loader
                                  Width='20px'
                                  Height='20px'
                                  loaderBg='3px solid white'
                                  loaderColor='3px solid var(--primary)'
                                />
                              </div>
                            ) : (
                              <>
                                <VideoSvg
                                  color='#fff'
                                  bgColor='#25c277'
                                />
                                Choose mp4
                              </>
                            )}
                          </label>

                          <div className='descText ml-20'>Video size should be less than 16MB</div>
                        </div>
                      )}

                      {isMediaSelected('document') && (
                        <div className='flex align-center mb-20'>
                          <input
                            type='file'
                            accept='.pdf'
                            onChange={handleDocumentUpload}
                            id='uploadImg'
                            hidden
                          />

                          <label
                            for='uploadImg'
                            className='uploadBtn'>
                            {fileLoader ? (
                              <div className='loaderWrapper flex-row align-center justify-center '>
                                <Loader
                                  Width='20px'
                                  Height='20px'
                                  loaderBg='3px solid white'
                                  loaderColor='3px solid var(--primary)'
                                />
                              </div>
                            ) : (
                              <>
                                <DocSvg
                                  color='#fff'
                                  bgColor='#25c277'
                                />
                                Choose pdf
                              </>
                            )}
                          </label>

                          <div className='descText ml-20'>
                            Document size should be less than 100MB
                          </div>
                        </div>
                      )}

                      {errorMsg?.image && <div className='errorMsg'>{errorMsg?.image}</div>}

                      {errorMsg?.video && <div className='errorMsg'>{errorMsg?.video}</div>}

                      {errorMsg?.document && <div className='errorMsg'>{errorMsg?.document}</div>}
                    </>
                  )}

                  {selectedFileName && (
                    <>
                      {isMediaSelected('document') ? (
                        <div className='flex align-center mb-20'>
                          <DocSvg
                            color='#2D3036'
                            bgColor='#F0F1F2'
                          />

                          <div className='descText ml-10 mr-10'>{selectedFileName}</div>

                          <img
                            onClick={() => {
                              setState({
                                ...state,
                                document: '',
                              });
                              setSelectedFileName(null);
                            }}
                            alt='deleteIcon'
                            src={ICONS?.campaignDelete}
                            style={{
                              width: '25px',
                              height: '25px',
                              cursor: 'pointer',
                            }}
                          />
                        </div>
                      ) : (
                        <div className='flex align-center mb-20'>
                          {state?.video && (
                            <video
                              style={{
                                width: '50px',
                                height: '50px',
                                borderRadius: '10px',
                                objectFit: 'cover',
                              }}
                              src={state?.video}
                            />
                          )}

                          {state?.image && (
                            <img
                              src={state?.image}
                              style={{
                                width: '50px',
                                height: '50px',
                                borderRadius: '10px',
                                objectFit: 'cover',
                              }}
                              alt='preview'
                            />
                          )}

                          <div className='descText ml-10 mr-10'>{selectedFileName}</div>

                          <img
                            onClick={() => {
                              if (state?.image) {
                                setState({
                                  ...state,
                                  image: '',
                                });
                              }
                              if (state?.video) {
                                setState({
                                  ...state,
                                  video: '',
                                });
                              }
                              setSelectedFileName(null);
                            }}
                            alt='deleteIcon'
                            src={ICONS?.campaignDelete}
                            style={{
                              width: '25px',
                              height: '25px',
                              cursor: 'pointer',
                            }}
                          />
                        </div>
                      )}
                    </>
                  )}
                </>
              )}

              <Divider
                color={'var( --border-50)'}
                width='100%'
              />

              <div className=' body-content'>
                <div className='flex space-between align-center'>
                  <div>
                    <h1 className='font-medium weight-bold'>Body</h1>

                    <div className='descText mt-5 mb-5'>
                      Enter the text for your message in the language that you've selected.
                    </div>
                  </div>

                  <Button
                    type='button'
                    size={'small'}
                    label={'Add variable'}
                    iconPrefix={ICONS?.addBGwhite}
                    useRightImage1Class={true}
                    onClick={() => handleShowAddVariableOptions('body')}
                  />

                  {showAddVariableOptions?.includes('body') && (
                    <div className='AddVariableBodyOptions'>
                      {ADD_VARIABLE_OPTIONS?.map((item) => (
                        <div
                          key={item?.id}
                          className='dropdown-1 pointer'>
                          <DropDown
                            title={item?.label}
                            onClick={() => {
                              selectedHeaderVariable?.label !== item?.label &&
                                form.setFieldsValue({
                                  [item?.label]: '',
                                });
                              if (
                                !selectedBodyVariable?.some(
                                  (variable) =>
                                    variable?.label === item.label &&
                                    variable?.label !== 'custom_variable',
                                )
                              ) {
                                if (item?.label === 'custom_variable') {
                                  const filter = selectedBodyVariable?.filter((variable) =>
                                    variable?.label?.includes('custom_variable'),
                                  );
                                  setState({
                                    ...state,
                                    body: state?.body + item?.value,
                                    [`${item?.label}-${filter?.length + 1}`]: '',
                                  });
                                  const newEditorState = concatenateText(
                                    `{{${item?.label}-${filter?.length + 1}}}`,
                                  );
                                  setEditorState(newEditorState);
                                  setSelectedBodyVariable([
                                    ...selectedBodyVariable,
                                    {
                                      label: `${item?.label}-${filter?.length + 1}`,
                                      value: `{{${item?.label}-${filter?.length + 1}}}`,
                                    },
                                  ]);
                                } else {
                                  const getActiveProperties = Object.keys(state)?.filter(
                                    (property) => property == item?.label,
                                  );

                                  if (getActiveProperties?.length > 0) {
                                    for (const property in state) {
                                      if (property == item?.label) {
                                        setState({
                                          ...state,
                                          body: state?.body + item?.value,
                                          [item?.label]: state[property],
                                        });
                                      }
                                    }
                                  } else {
                                    setState({
                                      ...state,
                                      body: state?.body + item?.value,
                                      [item?.label]: '',
                                    });
                                  }

                                  const newEditorState = concatenateText(item?.value);
                                  setEditorState(newEditorState);
                                  setSelectedBodyVariable([...selectedBodyVariable, item]);
                                }
                                handleShowAddVariableOptions('body');
                              } else {
                                // console.log('this-1', state);
                                setState({
                                  ...state,
                                  body: state?.body + item?.value,
                                  [item?.label]: '',
                                });
                                const newEditorState = concatenateText(item?.value);
                                setEditorState(newEditorState);
                              }
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className='textEditorContainer'>
                <div
                  className='editor'
                  onDoubleClick={() => setShowToolbar(!showToolbar)}>
                  <Editor
                    ref={editorRef}
                    editorState={editorState}
                    handleKeyCommand={handleKeyCommand}
                    keyBindingFn={mapKeyToEditorCommand}
                    onChange={onEditorChange}
                    placeholder={`Template message in ${currentLanguage}`}
                  />
                </div>
                <div className='editorToolbox'>
                  <button
                    type='button'
                    onClick={() => handleToolbarClick('BOLD')}>
                    <img
                      src={ICONS?.BoldIcon}
                      alt='bold'
                    />
                  </button>

                  <button
                    type='button'
                    onClick={() => handleToolbarClick('ITALIC')}>
                    <img
                      src={ICONS?.ItalicIcon}
                      alt='italic'
                    />
                  </button>

                  <button
                    type='button'
                    onClick={() => handleToolbarClick('STRIKETHROUGH')}>
                    <img
                      src={ICONS?.StrikeThrough}
                      alt='strikeThrough'
                    />
                  </button>

                  <button
                    type='button'
                    onClick={() => setShowEmojiPicker(!showEmojiPicker)}>
                    <img
                      src={ICONS?.step3EmojiIcon}
                      alt='emoji'
                    />
                  </button>

                  {showEmojiPicker && (
                    <Picker
                      data={data}
                      onEmojiSelect={handleEmojiClick}
                      searchPosition='none'
                      previewPosition='none'
                    />
                  )}
                  <div className=''>{!!state?.body?.length ? state?.body?.length : 0} / 1024</div>
                </div>
              </div>

              {!!selectedBodyVariable?.length && (
                <div className='ml-20 mt-10'>
                  <h2 className='font-small weight-bold mt-5'>Samples for body content</h2>

                  {selectedBodyVariable?.map((each) => (
                    <div className='flex-row w-100 align-center mt-10 mb-10 sampleHeaderVariableInput'>
                      <h6 className='weight-medium w-30'>{each?.value}</h6>
                      <Form.Item
                        name={each?.label}
                        className='w-100 ml-20 h-100'
                        rules={[
                          {
                            required: true,
                            message: '*Required',
                          },
                        ]}>
                        <CustomTextArea
                          placeholder={'Enter sample content'}
                          rows={1}
                          autoSize={{ minRows: 1, maxRows: 1 }}
                          textAreaClass='templateHeaderTextArea'
                          value={state?.[each?.label]}
                          onChange={(e) => {
                            setState({
                              ...state,
                              [each?.label]: e.target.value,
                            });
                          }}
                        />
                      </Form.Item>
                    </div>
                  ))}
                </div>
              )}

              <Divider
                color={'var( --border-50)'}
                width='100%'
              />

              <div className='mt-20 mb-15'>
                <h1 className='font-medium weight-bold'>
                  Footer
                  <span className='font-sm weight-semibold'> (Optional) </span>
                </h1>

                <div className='descText mt-5 mb-5 '>
                  Add a short line of text to the bottom of your message template. If you add the
                  marketing opt-out button, the associated footer will be shown here by default.
                </div>
              </div>
              <div className='templateHeaderInput'>
                <CustomTextArea
                  className='mb-20'
                  placeholder={'Footer message'}
                  maxLength={60}
                  rows={1}
                  customCount={true}
                  textAreaClass='templateHeaderTextArea'
                  autoSize={{ maxRows: 1 }}
                  value={state?.footerText}
                  onChange={(e) => {
                    if (e.target.value?.length) {
                      setState({
                        ...state,
                        footerText: e.target.value,
                      });
                    } else {
                      let newState = { ...state };
                      delete newState?.footerText;
                      setState(newState);
                    }
                  }}
                />
              </div>
              <Divider
                color={'var( --border-50)'}
                width='100%'
              />

              <div className='mt-20'>
                <h1 className='font-medium weight-bold'>
                  Button
                  <span className='font-sm weight-semibold'> (Optional) </span>
                </h1>

                <div className='descText mt-5 mb-5'>
                  Create buttons that let customers respond to your message or take action.
                </div>
              </div>

              <div className='relative mt-15'>
                <Popover
                  content={<AddButtonsOption />}
                  open={showAddButtonsOptions}
                  onOpenChange={() => setShowAddButtonsOptions(false)}
                  trigger={getNumberOfButtons('Button')?.length === 10 ? '' : 'click'}>
                  <Button
                    type='button'
                    label={'Add buttons'}
                    iconSuffix={ICONS?.CaretDown}
                    iconPrefix={ICONS?.addBGwhite}
                    useRightImage1Class={true}
                    className={
                      getNumberOfButtons('Button')?.length === 10
                        ? 'buttonDisable addBtn'
                        : 'addBtn'
                    }
                    onClick={() => {
                      if (getNumberOfButtons('Button')?.length < 10) {
                        setShowAddButtonsOptions(!showAddButtonsOptions);
                      }
                    }}
                  />
                </Popover>
                {/* <Button
                  type='button'
                  label={'Add buttons'}
                  iconSuffix={ICONS?.CaretDown}
                  iconPrefix={ICONS?.addBGwhite}
                  useRightImage1Class={true}
                  className={
                    getNumberOfButtons('Button')?.length === 10 ? 'buttonDisable addBtn' : 'addBtn'
                  }
                  onClick={() => {
                    if (getNumberOfButtons('Button')?.length < 10) {
                      setShowAddButtonsOptions(!showAddButtonsOptions);
                    }
                  }}
                /> */}
                {/* {showAddButtonsOptions && <AddButtonsOption />} */}
                <div className='descText mt-15 mb-5'>
                  <img
                    src={ICONS?.step2PopupIcon}
                    alt='info'
                    style={{
                      width: '20px',
                      height: '20px',
                    }}
                  />
                  If you add more than three buttons, they will appear in a list.
                </div>
              </div>

              {!!quickReplyButtons?.length && (
                <DragDropContext onDragEnd={onDragEndOfQuickReply}>
                  <Droppable droppableId='buttons'>
                    {(provided) => (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className='quickReplyContainer'>
                        <div className='font-medium weight-bold mb-10'>Quick reply</div>

                        {quickReplyButtons
                          ?.filter((btn) => btn !== 'marketingButton')
                          ?.map((each, index) => (
                            <Draggable
                              key={each}
                              draggableId={each}
                              index={index}>
                              {(provided, snapshot) => (
                                <div
                                  ref={provided.innerRef}
                                  snapshot={snapshot}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}>
                                  {each?.includes('custom') && (
                                    <div
                                      key={each}
                                      className='flex-row align-center space-between mb-15 mt-20'>
                                      <img
                                        src={ICONS?.dragVertical}
                                        alt='drag'
                                        style={{
                                          width: '24px',
                                          height: '24px',
                                        }}
                                      />

                                      <div className='quickReplyButtonType'>Custom</div>
                                      <Form.Item
                                        className='buttonValue'
                                        name={each}
                                        rules={[
                                          {
                                            required: true,
                                            message: '*Required',
                                          },
                                        ]}>
                                        <CustomTextArea
                                          placeholder={`Button text ${index + 1}`}
                                          maxLength={25}
                                          rows={1}
                                          customCount={true}
                                          textAreaClass='templateHeaderTextArea'
                                          autoSize={{ maxRows: 1 }}
                                          value={state?.[each]}
                                          onChange={(e) => {
                                            setState({
                                              ...state,
                                              [each]: e.target.value,
                                            });
                                          }}
                                        />
                                      </Form.Item>
                                      <img
                                        src={ICONS?.campaignDelete}
                                        style={{
                                          width: '25px',
                                          height: '25px',
                                          cursor: 'pointer',
                                        }}
                                        onClick={() => {
                                          const newState = { ...state };
                                          delete newState?.[each];
                                          setState(newState);
                                          setQuickReplyButtons(
                                            quickReplyButtons?.filter((button) => button !== each),
                                          );
                                        }}
                                        alt='delete'
                                      />
                                    </div>
                                  )}
                                </div>
                              )}
                            </Draggable>
                          ))}

                        {quickReplyButtons?.includes('marketingButton') && (
                          <>
                            <div className='flex-row align-center space-between'>
                              <div className='quickReplyButtonType marketingOptTitle'>
                                Marketing opt-out
                              </div>

                              <CustomTextArea
                                className='marketingButtonValue'
                                placeholder={'Stop promotions'}
                                maxLength={25}
                                rows={1}
                                value={'Stop promotions'}
                                customCount={true}
                                disabled
                                textAreaClass='templateHeaderTextArea'
                                autoSize={{ maxRows: 1 }}
                              />

                              <CustomTextArea
                                className='marketingButtonValue'
                                placeholder={'Not interested? Tab Stop promotions'}
                                maxLength={60}
                                rows={1}
                                customCount={false}
                                textAreaClass='templateHeaderTextArea'
                                autoSize={{ maxRows: 1 }}
                                disabled
                              />

                              <img
                                src={ICONS?.campaignDelete}
                                style={{
                                  width: '25px',
                                  height: '25px',
                                  cursor: 'pointer',
                                }}
                                onClick={() => {
                                  const newState = { ...state };
                                  setQuickReplyButtons(
                                    quickReplyButtons.filter((each) => each !== 'marketingButton'),
                                  );
                                  delete newState?.['marketingButton'];
                                  setState(newState);
                                }}
                                alt='delete'
                              />
                            </div>

                            <div className='marketingBtnLabel'>
                              <RadioOption
                                value='forms'
                                id='forms'
                                name='category'
                                onChange={() => {}}
                              />

                              <div
                                className='descText mt-5 mb-5'
                                htmlFor='form'>
                                I understand that it's Gochew Grill's responsibility to stop sending
                                marketing messages to customers who opt out.
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    )}
                  </Droppable>
                </DragDropContext>
              )}

              {!!callToActionButtons?.length && (
                <DragDropContext onDragEnd={onDragEndOfActionCall}>
                  <Droppable droppableId='buttons'>
                    {(provided) => (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className='quickReplyContainer'>
                        <div className='font-medium weight-bold'>Call to action</div>

                        {callToActionButtons.map((each, index) => (
                          <Draggable
                            key={each}
                            draggableId={each}
                            index={index}>
                            {(provided, snapshot) => (
                              <div
                                ref={provided.innerRef}
                                snapshot={snapshot}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}>
                                {each?.includes('website') && (
                                  <div key={each}>
                                    <div className='flex-row align-center space-between mt-15  mb-15'>
                                      <img
                                        src={ICONS?.dragVertical}
                                        alt='drag'
                                        style={{ width: '24px', height: '24px' }}
                                      />
                                      <Select
                                        className='callToActionSelect'
                                        value={
                                          BUTTONS_LIST?.filter(({ label }) =>
                                            each?.includes(label),
                                          )?.[0]
                                        }
                                        onChange={(val) => onChangeOfCTASelect(val, index)}
                                        options={buttonList()}
                                      />
                                      <Form.Item
                                        className={'callToActionSelect'}
                                        name={each}
                                        rules={[
                                          {
                                            required: true,
                                            message: '*Required',
                                          },
                                        ]}>
                                        <CustomTextArea
                                          type='text'
                                          maxLength={25}
                                          rows={1}
                                          customCount={true}
                                          textAreaClass='templateHeaderTextArea'
                                          autoSize={{ maxRows: 1 }}
                                          value={state?.[each]?.name}
                                          onChange={(e) => {
                                            setState({
                                              ...state,
                                              [each]: {
                                                ...state?.[each],
                                                name: e.target.value,
                                              },
                                            });
                                          }}
                                        />
                                      </Form.Item>
                                      <Select
                                        className={'staticOrDynamicSelect'}
                                        // value={staticDynamic}
                                        options={[
                                          { label: 'static', value: 'Static' },
                                          { label: 'dynamic', value: 'Dynamic' },
                                        ]}
                                        onChange={(val) => {
                                          setStaticDynamic(val?.value);
                                          if (val?.value === 'Dynamic') {
                                            setState({
                                              ...state,
                                              [each]: {
                                                ...state?.[each],
                                                sample_url: '',
                                                dynamicOption: true,
                                              },
                                            });
                                          } else {
                                            delete state[each]?.sample_url;
                                            setState({
                                              ...state,
                                              [each]: {
                                                ...state?.[each],
                                                dynamicOption: false,
                                              },
                                            });
                                          }
                                        }}
                                      />
                                      <Form.Item
                                        className={'callToActionSelect'}
                                        name={each + '-url'}
                                        rules={[
                                          {
                                            required: true,
                                            message: '*Required',
                                          },
                                          {
                                            validator: validateURL,
                                          },
                                        ]}>
                                        <CustomTextArea
                                          type='text'
                                          maxLength={2000}
                                          rows={1}
                                          customCount={true}
                                          textAreaClass='templateHeaderTextArea'
                                          autoSize={{ maxRows: 1 }}
                                          value={state?.[each]?.url}
                                          onChange={(e) => {
                                            setState({
                                              ...state,
                                              [each]: {
                                                ...state?.[each],
                                                url: e.target.value,
                                              },
                                            });
                                          }}
                                        />
                                      </Form.Item>
                                      <img
                                        src={ICONS?.campaignDelete}
                                        style={{
                                          width: '25px',
                                          height: '25px',
                                          cursor: 'pointer',
                                        }}
                                        onClick={() => {
                                          const newState = { ...state };
                                          delete newState?.[each];
                                          setState(newState);
                                          setCallToActionButtons(
                                            callToActionButtons?.filter((btn) => btn !== each),
                                          );
                                        }}
                                        alt='delete'
                                      />
                                    </div>

                                    {state?.[each]?.dynamicOption &&
                                      (state?.[each]?.sample_url === '' ||
                                        state?.[each]?.sample_url) && (
                                        <div className='flex-row align-center'>
                                          <div className='font-medium weight-bold pr-10'>
                                            Add Sample URL
                                          </div>
                                          <Form.Item
                                            className='w-80'
                                            name='sample_url'
                                            rules={[
                                              {
                                                required: true,
                                                message: 'Must be given',
                                              },
                                              {
                                                validator: validateURL,
                                              },
                                            ]}>
                                            <CustomTextArea
                                              type='text'
                                              maxLength={2000}
                                              rows={1}
                                              customCount={true}
                                              textAreaClass='templateHeaderTextArea'
                                              autoSize={{ maxRows: 1 }}
                                              value={state?.[each]?.url}
                                              onChange={(e) => {
                                                setState({
                                                  ...state,
                                                  [each]: {
                                                    ...state?.[each],
                                                    sample_url: e.target.value,
                                                  },
                                                });
                                              }}
                                            />
                                          </Form.Item>
                                        </div>
                                      )}
                                  </div>
                                )}
                                {each?.includes('number') && (
                                  <div
                                    key={each}
                                    className='flex-row align-center space-between mt-15  mb-15'>
                                    <img
                                      src={ICONS?.dragVertical}
                                      alt='drag'
                                      style={{ width: '24px', height: '24px' }}
                                    />

                                    <Select
                                      className='callToActionSelect'
                                      value={
                                        BUTTONS_LIST?.filter(({ label }) =>
                                          each?.includes(label),
                                        )?.[0]
                                      }
                                      onChange={(val) => onChangeOfCTASelect(val, index)}
                                      options={buttonList()}
                                    />
                                    <Form.Item
                                      className={'callToActionSelect'}
                                      name={each}
                                      rules={[
                                        {
                                          required: true,
                                          message: '*Required',
                                        },
                                      ]}>
                                      <CustomTextArea
                                        type='text'
                                        maxLength={25}
                                        rows={1}
                                        customCount={true}
                                        textAreaClass='templateHeaderTextArea'
                                        autoSize={{ maxRows: 1 }}
                                        value={state?.[each]?.name}
                                        onChange={(e) => {
                                          setState({
                                            ...state,
                                            [each]: {
                                              ...state?.[each],
                                              name: e.target.value,
                                            },
                                          });
                                        }}
                                      />
                                    </Form.Item>
                                    <div className='borderNumber flex-row align-center justify-center'>
                                      +91
                                    </div>
                                    <Form.Item
                                      className={'callToActionSelect'}
                                      name={each + '-number'}
                                      rules={[
                                        // {
                                        //   required: true,
                                        //   message: '*Required',
                                        // },
                                        {
                                          validator: mobileValidateURL,
                                        },
                                      ]}>
                                      <CustomTextArea
                                        type='text'
                                        maxLength={10}
                                        rows={1}
                                        customCount={true}
                                        textAreaClass='templateHeaderTextArea'
                                        autoSize={{ maxRows: 1 }}
                                        value={state?.[each]?.number}
                                        onChange={(e) => {
                                          setState({
                                            ...state,
                                            [each]: {
                                              ...state?.[each],
                                              number: e.target.value,
                                            },
                                          });
                                        }}
                                      />
                                    </Form.Item>
                                    <img
                                      src={ICONS?.campaignDelete}
                                      style={{
                                        width: '25px',
                                        height: '25px',
                                        cursor: 'pointer',
                                      }}
                                      onClick={() => {
                                        const newState = { ...state };
                                        delete newState?.[each];
                                        setState(newState);
                                        setCallToActionButtons(
                                          callToActionButtons?.filter((btn) => btn !== each),
                                        );
                                      }}
                                      alt='delete'
                                    />
                                  </div>
                                )}

                                {each?.includes('offerCode') && (
                                  <div
                                    key={each}
                                    className='flex-row align-center space-between mt-15 mb-15'>
                                    <img
                                      src={ICONS?.dragVertical}
                                      alt='drag'
                                      style={{ width: '24px', height: '24px' }}
                                    />

                                    <Select
                                      className='callToActionSelect'
                                      value={
                                        BUTTONS_LIST?.filter(({ label }) =>
                                          each?.includes(label),
                                        )?.[0]
                                      }
                                      onChange={(val) => onChangeOfCTASelect(val, index)}
                                      options={buttonList()}
                                    />

                                    <CustomTextArea
                                      type='text'
                                      className={'callToActionSelect'}
                                      customCount={false}
                                      textAreaClass='templateHeaderTextArea'
                                      autoSize={{ maxRows: 1 }}
                                      disabled
                                      value={'Copy Offer Code'}
                                    />
                                    <Form.Item
                                      name={each}
                                      className={'copyOfferCodeInput'}
                                      rules={[
                                        {
                                          required: true,
                                          message: '*Required',
                                        },
                                      ]}>
                                      <CustomTextArea
                                        type='text'
                                        maxLength={15}
                                        rows={1}
                                        customCount={true}
                                        textAreaClass='templateHeaderTextArea'
                                        autoSize={{ maxRows: 1 }}
                                        value={state?.[each]?.name}
                                        onChange={(e) => {
                                          setState({
                                            ...state,
                                            [each]: {
                                              ...state?.[each],
                                              name: e.target.value,
                                            },
                                          });
                                        }}
                                      />
                                    </Form.Item>
                                    <img
                                      src={ICONS?.campaignDelete}
                                      style={{
                                        width: '25px',
                                        height: '25px',
                                        cursor: 'pointer',
                                      }}
                                      onClick={() => {
                                        const newState = { ...state };
                                        delete newState?.[each];
                                        setState(newState);
                                        setCallToActionButtons(
                                          callToActionButtons?.filter((btn) => btn !== each),
                                        );
                                      }}
                                      alt='delete'
                                    />
                                  </div>
                                )}
                              </div>
                            )}
                          </Draggable>
                        ))}
                      </div>
                    )}
                  </Droppable>
                </DragDropContext>
              )}
            </div>
            <div className='languageContainer'>
              <h1 className='languageTitle'>Languages</h1>

              {selectedLanguages?.map((item) => (
                <div className='languageItem'>
                  <RadioOption
                    value={item}
                    selectedValue={currentLanguage}
                    onChange={(val) => setCurrentLanguage(val)}
                    id={item}
                    name='language'
                  />

                  <label
                    htmlFor={item}
                    className='w-100 pointer'>
                    <div className='font-sm weight-bold'>{item}</div>
                  </label>
                </div>
              ))}
              <div className='languageSelect'>
                <Select
                  placeholder='Add Languages'
                  options={LANGUAGE_OPTIONS.filter(
                    (each) => !selectedLanguages?.includes(each?.value),
                  )}
                  onChange={(lang) => updateLanguage(lang)}
                />
              </div>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default TemplateDetails;
