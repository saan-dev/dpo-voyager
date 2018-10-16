/**
 * 3D Foundation Project
 * Copyright 2018 Smithsonian Institution
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as React from "react";
import * as ReactDOM from "react-dom";


import VoyagerView from "../core/views/VoyagerView";

import VoyagerApplication, { IVoyagerApplicationProps } from "../core/system/VoyagerApplication";

////////////////////////////////////////////////////////////////////////////////

/**
 * Voyager prep main application.
 */
export default class Application extends VoyagerApplication
{
    constructor(props: IVoyagerApplicationProps)
    {
        super(props);

        this.start();
        this.presentationController.loadFromLocationUrl();

        ReactDOM.render(
            <VoyagerView
                viewManager={this.viewManager}
                actions={this.presentationController.actions} />,
        props.element
    );
    }

}