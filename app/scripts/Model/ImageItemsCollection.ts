﻿/*
    Copyright 2016 Sony Corporation

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/


/// <reference path="../include/interfaces.d.ts" />
/// <reference path="ImageItem.ts" />

module Garage {
    export module Model {
        var TAG = "[Garage.Model.ImageItemsCollection] ";

        export class ImageItemsCollection extends Backbone.Collection<ImageItem> {

            // Backbone.Collection に対象の Model の型を与える
            model = ImageItem;

            //! constructor
            constructor(models?: Model.ImageItem[]) {
                super(models);
            }

            //! destroy ハンドラ。
            private onDestroy(item: Model.ImageItem) {
                console.log(TAG + "onDestroy()");
            }
        }
    }
}
