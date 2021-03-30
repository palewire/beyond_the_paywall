/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

// StudyModule.js, Brian Chivers 3/19/2021
// This module starts all the WebScience modules, which collect
// data for this study
import * as WebScience from './WebScience.js'
import * as ArticleContents from './ArticleContents.js'
import * as Advertisements from './Advertisements.js'
import {destinationDomains} from './domains'

export function initialize () {

  // Configure navigation collection
  WebScience.Measurements.PageNavigation.startMeasurement({
    domains: destinationDomains,
    trackUserAttention: true
  })

  // Configure link exposure collection
  // WebScience.Utilities.LinkResolution.initialize()
  // WebScience.Measurements.LinkExposure.startMeasurement({
  // domains: destinationDomains,
  // privateWindows: false
  // })

  // Start Article Contents Module
  ArticleContents.startMeasurement({
    domains: destinationDomains
  })

  // Start Advertisements Module
  Advertisements.startMeasurement({
    domains: destinationDomains
  })
}
