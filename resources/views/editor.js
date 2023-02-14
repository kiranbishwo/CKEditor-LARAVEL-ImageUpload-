import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import AutoImage from '@ckeditor/ckeditor5-image/src/autoimage';
import AutoLink from '@ckeditor/ckeditor5-link/src/autolink';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import CKBox from '@ckeditor/ckeditor5-ckbox/src/ckbox';
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import CloudServices from '@ckeditor/ckeditor5-cloud-services/src/cloudservices';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code';
import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import ExportPdf from '@ckeditor/ckeditor5-export-pdf/src/exportpdf';
import ExportWord from '@ckeditor/ckeditor5-export-word/src/exportword';
import FindAndReplace from '@ckeditor/ckeditor5-find-and-replace/src/findandreplace';
import Font from '@ckeditor/ckeditor5-font/src/font';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline';
import HtmlEmbed from '@ckeditor/ckeditor5-html-embed/src/htmlembed';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageInsert from '@ckeditor/ckeditor5-image/src/imageinsert';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Link from '@ckeditor/ckeditor5-link/src/link';
import LinkImage from '@ckeditor/ckeditor5-link/src/linkimage';
import List from '@ckeditor/ckeditor5-list/src/list';
import ListProperties from '@ckeditor/ckeditor5-list/src/listproperties';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Mention from '@ckeditor/ckeditor5-mention/src/mention';
import PageBreak from '@ckeditor/ckeditor5-page-break/src/pagebreak';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import PictureEditing from '@ckeditor/ckeditor5-image/src/pictureediting';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';
import SourceEditing from '@ckeditor/ckeditor5-source-editing/src/sourceediting';
import SpecialCharacters from '@ckeditor/ckeditor5-special-characters/src/specialcharacters';
import SpecialCharactersEssentials from '@ckeditor/ckeditor5-special-characters/src/specialcharactersessentials';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript';
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableCaption from '@ckeditor/ckeditor5-table/src/tablecaption';
import TableCellProperties from '@ckeditor/ckeditor5-table/src/tablecellproperties';
import TableColumnResize from '@ckeditor/ckeditor5-table/src/tablecolumnresize';
import TableProperties from '@ckeditor/ckeditor5-table/src/tableproperties';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TextPartLanguage from '@ckeditor/ckeditor5-language/src/textpartlanguage';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';
import TodoList from '@ckeditor/ckeditor5-list/src/todolist';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import WordCount from '@ckeditor/ckeditor5-word-count/src/wordcount';
import WProofreader from '@webspellchecker/wproofreader-ckeditor5/src/wproofreader';

ClassicEditor
    .create( document.querySelector( '#editor1' ), {
        ckfinder:{
            uploadUrl:"{{route('ckeditor.upload', ['_token' => csrf_token() ])}}"
        },
        ckbox: {
            // This editor configuration includes the CKBox feature.
            // Provide correct configuration values to use it.
            tokenUrl: 'https://example.com/cs-token-endpoint'
            // Read more about CKBox - https://ckeditor.com/docs/ckeditor5/latest/features/images/image-upload/ckbox.html.
            // For other image upload methods see the guide - https://ckeditor.com/docs/ckeditor5/latest/features/images/image-upload/image-upload.html.
        },
        plugins: [
            Autoformat, BlockQuote, Bold, Heading, Image, ImageCaption,
            ImageStyle, ImageToolbar, Indent, Italic, Link, List, MediaEmbed,
            Paragraph, Table, TableToolbar, Alignment, AutoImage, AutoLink,
            CKBox, CloudServices, Code, CodeBlock, Essentials, ExportPdf,
            ExportWord, FindAndReplace, Font, Highlight, HorizontalLine,
            HtmlEmbed, ImageInsert, ImageResize, ImageUpload, IndentBlock,
            LinkImage, ListProperties, Mention, PageBreak, PasteFromOffice,
            PictureEditing, RemoveFormat, SourceEditing, SpecialCharacters,
            SpecialCharactersEssentials, Strikethrough, Subscript, Superscript,
            TableCaption, TableCellProperties, TableColumnResize,
            TableProperties, TextPartLanguage, TextTransformation, TodoList,
            Underline, WordCount, WProofreader
        ],
        toolbar: {
            items: [
                'undo', 'redo',
                '|',
                'exportPdf', 'exportWord',
                '|',
                'wproofreader', 'findAndReplace', 'selectAll',
                '|',
                'heading',
                '|',
                'removeFormat', 'bold', 'italic', 'strikethrough', 'underline', 'code', 'subscript', 'superscript',
                '|',
                'specialCharacters', 'horizontalLine', 'pageBreak',
                '|',
                '-',
                'highlight', 'fontSize', 'fontFamily', 'fontColor', 'fontBackgroundColor',
                '|',
                'link', 'blockQuote', 'insertTable', 'uploadImage', 'ckbox', 'mediaEmbed', 'codeBlock', 'htmlEmbed',
                '|',
                'bulletedList', 'numberedList', 'todoList',
                '|',
                'outdent', 'indent', 'alignment',
                '|',
                'textPartLanguage',
                '|',
                'sourceEditing'
            ],
            shouldNotGroupWhenFull: true
        },
        exportPdf: {
            stylesheets: [
                'EDITOR_STYLES',
                // Add your custom styles here
                // Read more in the documentation:
                // https://ckeditor.com/docs/ckeditor5/latest/features/export-pdf.html#plugin-option
            ],
            fileName: 'export-pdf-demo.pdf',
            converterOptions: {
                format: 'Tabloid',
                margin_top: '20mm',
                margin_bottom: '20mm',
                margin_right: '24mm',
                margin_left: '24mm',
                page_orientation: 'portrait'
            },
            // PROVIDE CORRECT VALUES HERE:
            tokenUrl: 'https://example.com/cs-token-endpoint'
        },
        exportWord: {
            stylesheets: [ 'EDITOR_STYLES' ],
            fileName: 'export-word-demo.docx',
            converterOptions: {
                format: 'B4',
                margin_top: '20mm',
                margin_bottom: '20mm',
                margin_right: '12mm',
                margin_left: '12mm',
                page_orientation: 'portrait'
            },
            // PROVIDE CORRECT VALUES HERE:
            tokenUrl: 'https://example.com/cs-token-endpoint'
        },
        fontFamily: {
            supportAllValues: true
        },
        fontSize: {
            options: [ 10, 12, 14, 'default', 18, 20, 22 ],
            supportAllValues: true
        },
        htmlEmbed: {
            showPreviews: true
        },
        image: {
            styles: [
                'alignCenter',
                'alignLeft',
                'alignRight'
            ],
            resizeOptions: [
                {
                    name: 'resizeImage:original',
                    label: 'Original',
                    value: null
                },
                {
                    name: 'resizeImage:50',
                    label: '50%',
                    value: '50'
                },
                {
                    name: 'resizeImage:75',
                    label: '75%',
                    value: '75'
                }
            ],
            toolbar: [
                'imageTextAlternative', 'toggleImageCaption', '|',
                'imageStyle:inline', 'imageStyle:wrapText', 'imageStyle:breakText', 'imageStyle:side', '|',
                'resizeImage'
            ],
            insert: {
                integrations: [
                    'insertImageViaUrl'
                ]
            }
        },
        list: {
            properties: {
                styles: true,
                startIndex: true,
                reversed: true
            }
        },
        link: {
            decorators: {
                addTargetToExternalLinks: true,
                defaultProtocol: 'https://',
                toggleDownloadable: {
                    mode: 'manual',
                    label: 'Downloadable',
                    attributes: {
                        download: 'file'
                    }
                }
            }
        },
        mention: {
            feeds: [
                {
                    marker: '@',
                    feed: [
                        '@apple', '@bears', '@brownie', '@cake', '@cake', '@candy', '@canes', '@chocolate', '@cookie', '@cotton', '@cream',
                        '@cupcake', '@danish', '@donut', '@dragée', '@fruitcake', '@gingerbread', '@gummi', '@ice', '@jelly-o',
                        '@liquorice', '@macaroon', '@marzipan', '@oat', '@pie', '@plum', '@pudding', '@sesame', '@snaps', '@soufflé',
                        '@sugar', '@sweet', '@topping', '@wafer'
                    ],
                    minimumCharacters: 1
                }
            ]
        },
        placeholder: 'Type or paste your content here!',
        table: {
            contentToolbar: [
                'tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties', 'toggleTableCaption'
            ]
        },
        wproofreader: {
        // PROVIDE CORRECT VALUE HERE:
            serviceId: 'service ID',
            lang: 'auto',
            srcUrl: 'https://svc.webspellchecker.net/spellcheck31/wscbundle/wscbundle.js'
        }
    } )
    .then( editor => {
        window.editor = editor;
        // Prevent showing a warning notification when user is pasting a content from MS Word or Google Docs.
        window.preventPasteFromOfficeNotification = true;

        document.querySelector( '.ck.ck-editor__main' ).appendChild( editor.plugins.get( 'WordCount' ).wordCountContainer );
    } )
    .catch( err => {
        console.error( err );
    } );
