import { html } from '@polymer/polymer/polymer-element.js';
const cardStyleElement = document.createElement('dom-module');
cardStyleElement.setAttribute("id", "card-styles");
cardStyleElement.setAttribute("theme-for", "subwindow");

cardStyleElement.innerHTML = `
    <template>
        <style>
            .card {
                background: var(--subwindow-bg,#fff);
                border-radius: var(--subwindow-border-radius,2px);
                display: inline-block;
                /*margin: 1rem;*/
                position: relative;
            }

            .card-1 {
                box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
                /*transition: all 0.3s cubic-bezier(.25,.8,.25,1);*/
            }

            .card-1:hover {
                box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
            }

            .card-2 {
                box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
            }

            .card-3 {
                box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
            }

            .card-4 {
                box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
            }

            .card-5 {
                box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
            }
        </style>
    </template>
    `;
cardStyleElement.register('card-styles');
