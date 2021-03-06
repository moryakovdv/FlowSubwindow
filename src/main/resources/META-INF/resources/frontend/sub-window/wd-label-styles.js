import { html } from '@polymer/polymer/polymer-element.js';
const wdLabelStyleElement = document.createElement('dom-module');

wdLabelStyleElement.innerHTML = `
    <template>
        <style>

            .wdlabel-caption {
                position:relative; 
                width: var(--subwindow-desktop-bar-label-width,200px);
                height: 27px;
                padding-left: 2px;

                overflow: hidden;
                display: inline-block;
                /*background: #00000000;*/
                border-top: var(--subwindow-desktop-bar-label-top-width,3px)
                            var(--subwindow-desktop-bar-label-top-style,solid)
                            var(--subwindow-desktop-bar-label-top-color,#666666);
                /*border-top-color: blue;*/
                font-size: var(--lumo-font-size-m, 0.875rem);
            }
            
            .wdlabel-caption:hover {
                /*border-top: 3px solid #000000FF;*/
                border-top: var(--subwindow-desktop-bar-label-top-hover-width,3px)
                            var(--subwindow-desktop-bar-label-top-hover-style,solid)
                            var(--subwindow-desktop-bar-label-top-hover-color,#0066ff);
                
                /*border-top-color: #0066ff;*/
                /*background: #00000055;*/
            }
            
            .wdlabel-caption-focus{
                /*border-top: 3px solid #000000FF;*/
                /*border-top-color: #0066ff;*/
                
                border-top: var(--subwindow-desktop-bar-label-top-focus-width,3px)
                            var(--subwindow-desktop-bar-label-top-focus-style,solid)
                            var(--subwindow-desktop-bar-label-top-focus-color,#0066ff);
                
                /*border-top-color: blue;*/
            }
            
            .wdlabel-close-button {
                position: absolute;
                right: 0px;
                margin: 3px;
                width: 18px;
                height: 18px;
                border-radius: 3px;
                background-color: var(--subwindow-header-bar-button-background-color);
                border: 1px solid #666666;
                display: inline-block;
            }

            .wdlabel-label {
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                display: inline-block;
                width: 75%;
                font-size: var(--lumo-font-size-m, 0.875rem);
                margin: 2px;
            }

            .wdlabel-icon {
                max-height: 16px;
                margin-top: 5px;
                vertical-align: top;
            }

        </style>
    </template>
    `;

wdLabelStyleElement.register('wd-label-styles');
