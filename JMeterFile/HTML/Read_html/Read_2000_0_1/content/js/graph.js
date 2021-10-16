/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 42.0, "series": [{"data": [[0.0, 1.0], [0.1, 1.0], [0.2, 1.0], [0.3, 1.0], [0.4, 1.0], [0.5, 1.0], [0.6, 1.0], [0.7, 1.0], [0.8, 1.0], [0.9, 1.0], [1.0, 1.0], [1.1, 1.0], [1.2, 1.0], [1.3, 1.0], [1.4, 1.0], [1.5, 1.0], [1.6, 1.0], [1.7, 1.0], [1.8, 1.0], [1.9, 1.0], [2.0, 1.0], [2.1, 1.0], [2.2, 1.0], [2.3, 1.0], [2.4, 1.0], [2.5, 1.0], [2.6, 1.0], [2.7, 1.0], [2.8, 1.0], [2.9, 1.0], [3.0, 1.0], [3.1, 1.0], [3.2, 1.0], [3.3, 1.0], [3.4, 1.0], [3.5, 1.0], [3.6, 1.0], [3.7, 1.0], [3.8, 1.0], [3.9, 1.0], [4.0, 1.0], [4.1, 1.0], [4.2, 1.0], [4.3, 1.0], [4.4, 1.0], [4.5, 1.0], [4.6, 1.0], [4.7, 1.0], [4.8, 1.0], [4.9, 1.0], [5.0, 1.0], [5.1, 1.0], [5.2, 1.0], [5.3, 1.0], [5.4, 1.0], [5.5, 1.0], [5.6, 1.0], [5.7, 1.0], [5.8, 1.0], [5.9, 1.0], [6.0, 1.0], [6.1, 1.0], [6.2, 1.0], [6.3, 1.0], [6.4, 1.0], [6.5, 1.0], [6.6, 1.0], [6.7, 1.0], [6.8, 1.0], [6.9, 1.0], [7.0, 1.0], [7.1, 1.0], [7.2, 1.0], [7.3, 1.0], [7.4, 1.0], [7.5, 1.0], [7.6, 1.0], [7.7, 1.0], [7.8, 1.0], [7.9, 1.0], [8.0, 1.0], [8.1, 1.0], [8.2, 1.0], [8.3, 1.0], [8.4, 1.0], [8.5, 1.0], [8.6, 1.0], [8.7, 1.0], [8.8, 1.0], [8.9, 1.0], [9.0, 1.0], [9.1, 1.0], [9.2, 1.0], [9.3, 1.0], [9.4, 1.0], [9.5, 1.0], [9.6, 1.0], [9.7, 1.0], [9.8, 1.0], [9.9, 1.0], [10.0, 1.0], [10.1, 1.0], [10.2, 1.0], [10.3, 1.0], [10.4, 1.0], [10.5, 1.0], [10.6, 1.0], [10.7, 1.0], [10.8, 1.0], [10.9, 1.0], [11.0, 1.0], [11.1, 1.0], [11.2, 1.0], [11.3, 1.0], [11.4, 1.0], [11.5, 1.0], [11.6, 1.0], [11.7, 1.0], [11.8, 1.0], [11.9, 1.0], [12.0, 1.0], [12.1, 1.0], [12.2, 1.0], [12.3, 2.0], [12.4, 2.0], [12.5, 2.0], [12.6, 2.0], [12.7, 2.0], [12.8, 2.0], [12.9, 2.0], [13.0, 2.0], [13.1, 2.0], [13.2, 2.0], [13.3, 2.0], [13.4, 2.0], [13.5, 2.0], [13.6, 2.0], [13.7, 2.0], [13.8, 2.0], [13.9, 2.0], [14.0, 2.0], [14.1, 2.0], [14.2, 2.0], [14.3, 2.0], [14.4, 2.0], [14.5, 2.0], [14.6, 2.0], [14.7, 2.0], [14.8, 2.0], [14.9, 2.0], [15.0, 2.0], [15.1, 2.0], [15.2, 2.0], [15.3, 2.0], [15.4, 2.0], [15.5, 2.0], [15.6, 2.0], [15.7, 2.0], [15.8, 2.0], [15.9, 2.0], [16.0, 2.0], [16.1, 2.0], [16.2, 2.0], [16.3, 2.0], [16.4, 2.0], [16.5, 2.0], [16.6, 2.0], [16.7, 2.0], [16.8, 2.0], [16.9, 2.0], [17.0, 2.0], [17.1, 2.0], [17.2, 2.0], [17.3, 2.0], [17.4, 2.0], [17.5, 2.0], [17.6, 2.0], [17.7, 2.0], [17.8, 2.0], [17.9, 2.0], [18.0, 2.0], [18.1, 2.0], [18.2, 2.0], [18.3, 2.0], [18.4, 2.0], [18.5, 2.0], [18.6, 2.0], [18.7, 2.0], [18.8, 2.0], [18.9, 2.0], [19.0, 2.0], [19.1, 2.0], [19.2, 2.0], [19.3, 2.0], [19.4, 2.0], [19.5, 2.0], [19.6, 2.0], [19.7, 2.0], [19.8, 2.0], [19.9, 2.0], [20.0, 2.0], [20.1, 2.0], [20.2, 2.0], [20.3, 2.0], [20.4, 2.0], [20.5, 2.0], [20.6, 2.0], [20.7, 2.0], [20.8, 2.0], [20.9, 2.0], [21.0, 2.0], [21.1, 2.0], [21.2, 2.0], [21.3, 2.0], [21.4, 2.0], [21.5, 2.0], [21.6, 2.0], [21.7, 2.0], [21.8, 2.0], [21.9, 2.0], [22.0, 2.0], [22.1, 2.0], [22.2, 2.0], [22.3, 2.0], [22.4, 2.0], [22.5, 2.0], [22.6, 2.0], [22.7, 2.0], [22.8, 2.0], [22.9, 2.0], [23.0, 2.0], [23.1, 2.0], [23.2, 2.0], [23.3, 2.0], [23.4, 2.0], [23.5, 2.0], [23.6, 2.0], [23.7, 2.0], [23.8, 2.0], [23.9, 2.0], [24.0, 2.0], [24.1, 2.0], [24.2, 2.0], [24.3, 2.0], [24.4, 2.0], [24.5, 2.0], [24.6, 2.0], [24.7, 2.0], [24.8, 2.0], [24.9, 2.0], [25.0, 2.0], [25.1, 2.0], [25.2, 2.0], [25.3, 2.0], [25.4, 2.0], [25.5, 2.0], [25.6, 2.0], [25.7, 2.0], [25.8, 2.0], [25.9, 2.0], [26.0, 2.0], [26.1, 2.0], [26.2, 2.0], [26.3, 2.0], [26.4, 2.0], [26.5, 2.0], [26.6, 2.0], [26.7, 2.0], [26.8, 2.0], [26.9, 2.0], [27.0, 2.0], [27.1, 2.0], [27.2, 2.0], [27.3, 2.0], [27.4, 2.0], [27.5, 2.0], [27.6, 2.0], [27.7, 2.0], [27.8, 2.0], [27.9, 2.0], [28.0, 2.0], [28.1, 2.0], [28.2, 2.0], [28.3, 2.0], [28.4, 2.0], [28.5, 2.0], [28.6, 2.0], [28.7, 2.0], [28.8, 2.0], [28.9, 2.0], [29.0, 2.0], [29.1, 2.0], [29.2, 2.0], [29.3, 2.0], [29.4, 2.0], [29.5, 2.0], [29.6, 2.0], [29.7, 2.0], [29.8, 2.0], [29.9, 2.0], [30.0, 2.0], [30.1, 2.0], [30.2, 2.0], [30.3, 2.0], [30.4, 2.0], [30.5, 2.0], [30.6, 2.0], [30.7, 2.0], [30.8, 2.0], [30.9, 2.0], [31.0, 2.0], [31.1, 2.0], [31.2, 2.0], [31.3, 2.0], [31.4, 2.0], [31.5, 2.0], [31.6, 2.0], [31.7, 2.0], [31.8, 2.0], [31.9, 2.0], [32.0, 2.0], [32.1, 2.0], [32.2, 2.0], [32.3, 2.0], [32.4, 2.0], [32.5, 2.0], [32.6, 2.0], [32.7, 2.0], [32.8, 2.0], [32.9, 2.0], [33.0, 2.0], [33.1, 2.0], [33.2, 2.0], [33.3, 2.0], [33.4, 2.0], [33.5, 2.0], [33.6, 2.0], [33.7, 2.0], [33.8, 2.0], [33.9, 2.0], [34.0, 2.0], [34.1, 2.0], [34.2, 2.0], [34.3, 2.0], [34.4, 2.0], [34.5, 2.0], [34.6, 2.0], [34.7, 2.0], [34.8, 2.0], [34.9, 2.0], [35.0, 2.0], [35.1, 2.0], [35.2, 2.0], [35.3, 2.0], [35.4, 2.0], [35.5, 2.0], [35.6, 2.0], [35.7, 2.0], [35.8, 2.0], [35.9, 2.0], [36.0, 2.0], [36.1, 2.0], [36.2, 2.0], [36.3, 2.0], [36.4, 2.0], [36.5, 2.0], [36.6, 2.0], [36.7, 2.0], [36.8, 2.0], [36.9, 2.0], [37.0, 2.0], [37.1, 2.0], [37.2, 2.0], [37.3, 2.0], [37.4, 2.0], [37.5, 2.0], [37.6, 2.0], [37.7, 2.0], [37.8, 2.0], [37.9, 2.0], [38.0, 2.0], [38.1, 2.0], [38.2, 2.0], [38.3, 2.0], [38.4, 2.0], [38.5, 2.0], [38.6, 2.0], [38.7, 2.0], [38.8, 2.0], [38.9, 2.0], [39.0, 2.0], [39.1, 2.0], [39.2, 2.0], [39.3, 2.0], [39.4, 2.0], [39.5, 2.0], [39.6, 2.0], [39.7, 2.0], [39.8, 2.0], [39.9, 2.0], [40.0, 2.0], [40.1, 2.0], [40.2, 2.0], [40.3, 2.0], [40.4, 2.0], [40.5, 2.0], [40.6, 2.0], [40.7, 2.0], [40.8, 2.0], [40.9, 2.0], [41.0, 2.0], [41.1, 2.0], [41.2, 2.0], [41.3, 2.0], [41.4, 2.0], [41.5, 2.0], [41.6, 2.0], [41.7, 2.0], [41.8, 2.0], [41.9, 2.0], [42.0, 2.0], [42.1, 2.0], [42.2, 2.0], [42.3, 2.0], [42.4, 2.0], [42.5, 2.0], [42.6, 2.0], [42.7, 2.0], [42.8, 2.0], [42.9, 2.0], [43.0, 2.0], [43.1, 2.0], [43.2, 2.0], [43.3, 2.0], [43.4, 2.0], [43.5, 2.0], [43.6, 2.0], [43.7, 2.0], [43.8, 2.0], [43.9, 2.0], [44.0, 2.0], [44.1, 2.0], [44.2, 2.0], [44.3, 2.0], [44.4, 2.0], [44.5, 2.0], [44.6, 2.0], [44.7, 2.0], [44.8, 2.0], [44.9, 2.0], [45.0, 2.0], [45.1, 2.0], [45.2, 2.0], [45.3, 2.0], [45.4, 2.0], [45.5, 2.0], [45.6, 2.0], [45.7, 2.0], [45.8, 2.0], [45.9, 2.0], [46.0, 2.0], [46.1, 2.0], [46.2, 2.0], [46.3, 2.0], [46.4, 2.0], [46.5, 2.0], [46.6, 2.0], [46.7, 2.0], [46.8, 2.0], [46.9, 2.0], [47.0, 2.0], [47.1, 2.0], [47.2, 2.0], [47.3, 2.0], [47.4, 2.0], [47.5, 2.0], [47.6, 2.0], [47.7, 2.0], [47.8, 2.0], [47.9, 2.0], [48.0, 2.0], [48.1, 2.0], [48.2, 2.0], [48.3, 2.0], [48.4, 2.0], [48.5, 2.0], [48.6, 2.0], [48.7, 2.0], [48.8, 2.0], [48.9, 2.0], [49.0, 2.0], [49.1, 2.0], [49.2, 2.0], [49.3, 2.0], [49.4, 2.0], [49.5, 2.0], [49.6, 2.0], [49.7, 2.0], [49.8, 2.0], [49.9, 2.0], [50.0, 2.0], [50.1, 2.0], [50.2, 2.0], [50.3, 2.0], [50.4, 2.0], [50.5, 2.0], [50.6, 2.0], [50.7, 2.0], [50.8, 2.0], [50.9, 2.0], [51.0, 2.0], [51.1, 2.0], [51.2, 2.0], [51.3, 2.0], [51.4, 2.0], [51.5, 2.0], [51.6, 2.0], [51.7, 2.0], [51.8, 2.0], [51.9, 2.0], [52.0, 2.0], [52.1, 2.0], [52.2, 2.0], [52.3, 2.0], [52.4, 2.0], [52.5, 2.0], [52.6, 2.0], [52.7, 2.0], [52.8, 2.0], [52.9, 2.0], [53.0, 2.0], [53.1, 2.0], [53.2, 2.0], [53.3, 2.0], [53.4, 2.0], [53.5, 2.0], [53.6, 2.0], [53.7, 2.0], [53.8, 2.0], [53.9, 2.0], [54.0, 2.0], [54.1, 2.0], [54.2, 2.0], [54.3, 2.0], [54.4, 2.0], [54.5, 2.0], [54.6, 2.0], [54.7, 2.0], [54.8, 2.0], [54.9, 2.0], [55.0, 2.0], [55.1, 2.0], [55.2, 2.0], [55.3, 2.0], [55.4, 2.0], [55.5, 2.0], [55.6, 2.0], [55.7, 2.0], [55.8, 2.0], [55.9, 2.0], [56.0, 2.0], [56.1, 2.0], [56.2, 2.0], [56.3, 2.0], [56.4, 2.0], [56.5, 2.0], [56.6, 2.0], [56.7, 2.0], [56.8, 2.0], [56.9, 2.0], [57.0, 2.0], [57.1, 2.0], [57.2, 2.0], [57.3, 2.0], [57.4, 2.0], [57.5, 2.0], [57.6, 2.0], [57.7, 2.0], [57.8, 2.0], [57.9, 2.0], [58.0, 2.0], [58.1, 2.0], [58.2, 2.0], [58.3, 2.0], [58.4, 2.0], [58.5, 2.0], [58.6, 2.0], [58.7, 2.0], [58.8, 2.0], [58.9, 2.0], [59.0, 2.0], [59.1, 2.0], [59.2, 3.0], [59.3, 3.0], [59.4, 3.0], [59.5, 3.0], [59.6, 3.0], [59.7, 3.0], [59.8, 3.0], [59.9, 3.0], [60.0, 3.0], [60.1, 3.0], [60.2, 3.0], [60.3, 3.0], [60.4, 3.0], [60.5, 3.0], [60.6, 3.0], [60.7, 3.0], [60.8, 3.0], [60.9, 3.0], [61.0, 3.0], [61.1, 3.0], [61.2, 3.0], [61.3, 3.0], [61.4, 3.0], [61.5, 3.0], [61.6, 3.0], [61.7, 3.0], [61.8, 3.0], [61.9, 3.0], [62.0, 3.0], [62.1, 3.0], [62.2, 3.0], [62.3, 3.0], [62.4, 3.0], [62.5, 3.0], [62.6, 3.0], [62.7, 3.0], [62.8, 3.0], [62.9, 3.0], [63.0, 3.0], [63.1, 3.0], [63.2, 3.0], [63.3, 3.0], [63.4, 3.0], [63.5, 3.0], [63.6, 3.0], [63.7, 3.0], [63.8, 3.0], [63.9, 3.0], [64.0, 3.0], [64.1, 3.0], [64.2, 3.0], [64.3, 3.0], [64.4, 3.0], [64.5, 3.0], [64.6, 3.0], [64.7, 3.0], [64.8, 3.0], [64.9, 3.0], [65.0, 3.0], [65.1, 3.0], [65.2, 3.0], [65.3, 3.0], [65.4, 3.0], [65.5, 3.0], [65.6, 3.0], [65.7, 3.0], [65.8, 3.0], [65.9, 3.0], [66.0, 3.0], [66.1, 3.0], [66.2, 3.0], [66.3, 3.0], [66.4, 3.0], [66.5, 3.0], [66.6, 3.0], [66.7, 3.0], [66.8, 3.0], [66.9, 3.0], [67.0, 3.0], [67.1, 3.0], [67.2, 3.0], [67.3, 3.0], [67.4, 3.0], [67.5, 3.0], [67.6, 3.0], [67.7, 3.0], [67.8, 3.0], [67.9, 3.0], [68.0, 3.0], [68.1, 3.0], [68.2, 3.0], [68.3, 3.0], [68.4, 3.0], [68.5, 3.0], [68.6, 3.0], [68.7, 3.0], [68.8, 3.0], [68.9, 3.0], [69.0, 3.0], [69.1, 3.0], [69.2, 3.0], [69.3, 3.0], [69.4, 3.0], [69.5, 3.0], [69.6, 3.0], [69.7, 3.0], [69.8, 3.0], [69.9, 3.0], [70.0, 3.0], [70.1, 3.0], [70.2, 3.0], [70.3, 3.0], [70.4, 3.0], [70.5, 3.0], [70.6, 3.0], [70.7, 3.0], [70.8, 3.0], [70.9, 3.0], [71.0, 3.0], [71.1, 3.0], [71.2, 3.0], [71.3, 3.0], [71.4, 3.0], [71.5, 3.0], [71.6, 3.0], [71.7, 3.0], [71.8, 3.0], [71.9, 3.0], [72.0, 3.0], [72.1, 3.0], [72.2, 3.0], [72.3, 3.0], [72.4, 3.0], [72.5, 3.0], [72.6, 3.0], [72.7, 3.0], [72.8, 3.0], [72.9, 3.0], [73.0, 3.0], [73.1, 3.0], [73.2, 3.0], [73.3, 3.0], [73.4, 3.0], [73.5, 3.0], [73.6, 3.0], [73.7, 3.0], [73.8, 3.0], [73.9, 3.0], [74.0, 3.0], [74.1, 3.0], [74.2, 3.0], [74.3, 3.0], [74.4, 3.0], [74.5, 3.0], [74.6, 3.0], [74.7, 3.0], [74.8, 3.0], [74.9, 3.0], [75.0, 3.0], [75.1, 3.0], [75.2, 3.0], [75.3, 3.0], [75.4, 3.0], [75.5, 3.0], [75.6, 3.0], [75.7, 3.0], [75.8, 3.0], [75.9, 3.0], [76.0, 3.0], [76.1, 3.0], [76.2, 3.0], [76.3, 3.0], [76.4, 3.0], [76.5, 3.0], [76.6, 3.0], [76.7, 3.0], [76.8, 3.0], [76.9, 3.0], [77.0, 3.0], [77.1, 3.0], [77.2, 3.0], [77.3, 3.0], [77.4, 3.0], [77.5, 3.0], [77.6, 3.0], [77.7, 3.0], [77.8, 3.0], [77.9, 3.0], [78.0, 3.0], [78.1, 3.0], [78.2, 3.0], [78.3, 3.0], [78.4, 3.0], [78.5, 3.0], [78.6, 3.0], [78.7, 3.0], [78.8, 3.0], [78.9, 3.0], [79.0, 3.0], [79.1, 3.0], [79.2, 3.0], [79.3, 3.0], [79.4, 3.0], [79.5, 3.0], [79.6, 3.0], [79.7, 3.0], [79.8, 3.0], [79.9, 3.0], [80.0, 3.0], [80.1, 3.0], [80.2, 4.0], [80.3, 4.0], [80.4, 4.0], [80.5, 4.0], [80.6, 4.0], [80.7, 4.0], [80.8, 4.0], [80.9, 4.0], [81.0, 4.0], [81.1, 4.0], [81.2, 4.0], [81.3, 4.0], [81.4, 4.0], [81.5, 4.0], [81.6, 4.0], [81.7, 4.0], [81.8, 4.0], [81.9, 4.0], [82.0, 4.0], [82.1, 4.0], [82.2, 4.0], [82.3, 4.0], [82.4, 4.0], [82.5, 4.0], [82.6, 4.0], [82.7, 4.0], [82.8, 4.0], [82.9, 4.0], [83.0, 4.0], [83.1, 4.0], [83.2, 4.0], [83.3, 4.0], [83.4, 4.0], [83.5, 4.0], [83.6, 4.0], [83.7, 4.0], [83.8, 4.0], [83.9, 4.0], [84.0, 4.0], [84.1, 4.0], [84.2, 4.0], [84.3, 4.0], [84.4, 4.0], [84.5, 4.0], [84.6, 4.0], [84.7, 4.0], [84.8, 4.0], [84.9, 4.0], [85.0, 4.0], [85.1, 4.0], [85.2, 4.0], [85.3, 4.0], [85.4, 4.0], [85.5, 4.0], [85.6, 4.0], [85.7, 4.0], [85.8, 4.0], [85.9, 4.0], [86.0, 4.0], [86.1, 4.0], [86.2, 4.0], [86.3, 4.0], [86.4, 4.0], [86.5, 4.0], [86.6, 4.0], [86.7, 4.0], [86.8, 4.0], [86.9, 4.0], [87.0, 4.0], [87.1, 4.0], [87.2, 4.0], [87.3, 4.0], [87.4, 4.0], [87.5, 4.0], [87.6, 4.0], [87.7, 4.0], [87.8, 4.0], [87.9, 4.0], [88.0, 4.0], [88.1, 4.0], [88.2, 4.0], [88.3, 4.0], [88.4, 4.0], [88.5, 4.0], [88.6, 5.0], [88.7, 5.0], [88.8, 5.0], [88.9, 5.0], [89.0, 5.0], [89.1, 5.0], [89.2, 5.0], [89.3, 5.0], [89.4, 5.0], [89.5, 5.0], [89.6, 5.0], [89.7, 5.0], [89.8, 5.0], [89.9, 5.0], [90.0, 5.0], [90.1, 5.0], [90.2, 5.0], [90.3, 5.0], [90.4, 5.0], [90.5, 5.0], [90.6, 5.0], [90.7, 5.0], [90.8, 5.0], [90.9, 5.0], [91.0, 5.0], [91.1, 5.0], [91.2, 5.0], [91.3, 5.0], [91.4, 5.0], [91.5, 5.0], [91.6, 5.0], [91.7, 5.0], [91.8, 5.0], [91.9, 5.0], [92.0, 5.0], [92.1, 5.0], [92.2, 5.0], [92.3, 6.0], [92.4, 6.0], [92.5, 6.0], [92.6, 6.0], [92.7, 6.0], [92.8, 6.0], [92.9, 6.0], [93.0, 6.0], [93.1, 6.0], [93.2, 6.0], [93.3, 6.0], [93.4, 6.0], [93.5, 6.0], [93.6, 6.0], [93.7, 6.0], [93.8, 6.0], [93.9, 6.0], [94.0, 6.0], [94.1, 6.0], [94.2, 7.0], [94.3, 7.0], [94.4, 7.0], [94.5, 7.0], [94.6, 7.0], [94.7, 7.0], [94.8, 7.0], [94.9, 7.0], [95.0, 8.0], [95.1, 8.0], [95.2, 8.0], [95.3, 8.0], [95.4, 8.0], [95.5, 8.0], [95.6, 8.0], [95.7, 8.0], [95.8, 8.0], [95.9, 9.0], [96.0, 9.0], [96.1, 9.0], [96.2, 9.0], [96.3, 9.0], [96.4, 9.0], [96.5, 9.0], [96.6, 9.0], [96.7, 9.0], [96.8, 9.0], [96.9, 9.0], [97.0, 9.0], [97.1, 10.0], [97.2, 10.0], [97.3, 10.0], [97.4, 10.0], [97.5, 10.0], [97.6, 10.0], [97.7, 11.0], [97.8, 11.0], [97.9, 11.0], [98.0, 11.0], [98.1, 11.0], [98.2, 11.0], [98.3, 11.0], [98.4, 12.0], [98.5, 12.0], [98.6, 12.0], [98.7, 12.0], [98.8, 13.0], [98.9, 13.0], [99.0, 15.0], [99.1, 16.0], [99.2, 17.0], [99.3, 19.0], [99.4, 19.0], [99.5, 20.0], [99.6, 20.0], [99.7, 21.0], [99.8, 24.0], [99.9, 27.0]], "isOverall": false, "label": "Query Order", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 2000.0, "minX": 0.0, "maxY": 2000.0, "series": [{"data": [[0.0, 2000.0]], "isOverall": false, "label": "Query Order", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4.9E-324, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 2000.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2000.0, "series": [{"data": [[0.0, 2000.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 1.6249999999999998, "minX": 1.6343715028E12, "maxY": 104.1491228070175, "series": [{"data": [[1.634371505E12, 3.6781609195402303], [1.6343715039E12, 3.595744680851065], [1.6343715049E12, 3.5333333333333337], [1.6343715029E12, 104.1491228070175], [1.6343715051E12, 4.224719101123598], [1.6343715031E12, 3.4776119402985084], [1.6343715041E12, 11.715789473684206], [1.634371503E12, 68.20779220779217], [1.634371504E12, 3.9009009009008997], [1.6343715037E12, 3.2328767123287676], [1.6343715047E12, 2.447368421052631], [1.6343715028E12, 32.09090909090911], [1.6343715038E12, 3.7407407407407405], [1.6343715048E12, 4.948453608247425], [1.6343715045E12, 3.8], [1.6343715044E12, 3.9591836734693886], [1.6343715034E12, 1.6249999999999998], [1.6343715046E12, 3.096153846153847], [1.6343715036E12, 3.903614457831326], [1.6343715035E12, 3.1063829787234045], [1.6343715042E12, 5.135802469135803], [1.6343715032E12, 4.211764705882352], [1.6343715052E12, 3.9519230769230775], [1.6343715033E12, 3.76595744680851], [1.6343715053E12, 3.269230769230769], [1.6343715043E12, 4.466666666666667]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 100, "maxX": 1.6343715053E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 1.0, "minX": 1.0, "maxY": 22.5, "series": [{"data": [[2.0, 2.4201388888888875], [3.0, 2.4707070707070695], [4.0, 2.3800904977375548], [5.0, 2.6271929824561395], [6.0, 2.8715596330275224], [7.0, 3.568181818181818], [8.0, 3.9999999999999996], [9.0, 4.357142857142858], [10.0, 4.631578947368421], [11.0, 5.333333333333333], [12.0, 6.0], [13.0, 6.0], [14.0, 7.0], [15.0, 6.5], [16.0, 6.0], [17.0, 6.5], [18.0, 16.666666666666668], [19.0, 12.0], [20.0, 9.0], [21.0, 18.5], [22.0, 13.333333333333334], [23.0, 18.5], [24.0, 11.0], [25.0, 8.833333333333334], [27.0, 8.0], [28.0, 15.3], [29.0, 12.083333333333334], [30.0, 4.75], [31.0, 13.0], [32.0, 19.5], [34.0, 8.857142857142858], [35.0, 2.0], [37.0, 7.0], [38.0, 2.8], [40.0, 2.0], [42.0, 5.0], [44.0, 6.0], [46.0, 8.25], [49.0, 8.5], [48.0, 2.0], [51.0, 4.666666666666667], [50.0, 2.0], [53.0, 5.0], [55.0, 10.5], [57.0, 16.0], [56.0, 3.0], [59.0, 9.0], [58.0, 2.5], [60.0, 7.499999999999999], [61.0, 2.25], [63.0, 3.0], [62.0, 8.153846153846155], [66.0, 1.0], [67.0, 2.0], [65.0, 2.0], [64.0, 2.0], [70.0, 1.0], [69.0, 2.1666666666666665], [68.0, 3.0], [71.0, 2.0], [74.0, 2.0], [73.0, 2.0], [75.0, 3.0], [72.0, 1.5], [78.0, 2.0], [76.0, 1.6666666666666667], [79.0, 2.0], [82.0, 2.0], [80.0, 2.0], [83.0, 2.0], [81.0, 2.5], [87.0, 4.0], [86.0, 1.0], [85.0, 2.0], [84.0, 2.25], [91.0, 2.2], [90.0, 2.6666666666666665], [88.0, 2.0], [92.0, 2.0], [99.0, 2.75], [98.0, 2.0], [97.0, 2.0], [96.0, 2.4], [102.0, 3.0], [100.0, 2.3333333333333335], [101.0, 2.5], [106.0, 1.0], [105.0, 1.5], [110.0, 1.5], [109.0, 4.0], [113.0, 4.0], [112.0, 3.5], [115.0, 3.0], [116.0, 2.0], [117.0, 2.0], [120.0, 1.6666666666666667], [121.0, 1.0], [124.0, 2.0], [126.0, 3.0], [127.0, 1.0], [131.0, 13.0], [134.0, 2.0], [135.0, 2.0], [138.0, 2.5], [142.0, 2.0], [140.0, 3.0], [136.0, 4.0], [137.0, 3.0], [151.0, 1.0], [150.0, 3.0], [148.0, 22.5], [147.0, 1.6666666666666667], [146.0, 1.0], [144.0, 1.5], [155.0, 1.5], [154.0, 2.0], [153.0, 2.0], [1.0, 2.559322033898305]], "isOverall": false, "label": "Query Order", "isController": false}, {"data": [[13.040499999999994, 2.9964999999999984]], "isOverall": false, "label": "Query Order-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 155.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 31680.0, "minX": 1.6343715028E12, "maxY": 778620.0, "series": [{"data": [[1.634371505E12, 594210.0], [1.6343715039E12, 642020.0], [1.6343715049E12, 512250.0], [1.6343715029E12, 778620.0], [1.6343715051E12, 607870.0], [1.6343715031E12, 457610.0], [1.6343715041E12, 648850.0], [1.634371503E12, 525910.0], [1.634371504E12, 758130.0], [1.6343715037E12, 498590.0], [1.6343715047E12, 259540.0], [1.6343715028E12, 300520.0], [1.6343715038E12, 553230.0], [1.6343715048E12, 662510.0], [1.6343715045E12, 648850.0], [1.6343715044E12, 669340.0], [1.6343715034E12, 163920.0], [1.6343715046E12, 355160.0], [1.6343715036E12, 566890.0], [1.6343715035E12, 321010.0], [1.6343715042E12, 553230.0], [1.6343715032E12, 580550.0], [1.6343715052E12, 710320.0], [1.6343715033E12, 321010.0], [1.6343715053E12, 355160.0], [1.6343715043E12, 614700.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.634371505E12, 114840.0], [1.6343715039E12, 124080.0], [1.6343715049E12, 99000.0], [1.6343715029E12, 150480.0], [1.6343715051E12, 117480.0], [1.6343715031E12, 88440.0], [1.6343715041E12, 125400.0], [1.634371503E12, 101640.0], [1.634371504E12, 146520.0], [1.6343715037E12, 96360.0], [1.6343715047E12, 50160.0], [1.6343715028E12, 58080.0], [1.6343715038E12, 106920.0], [1.6343715048E12, 128040.0], [1.6343715045E12, 125400.0], [1.6343715044E12, 129360.0], [1.6343715034E12, 31680.0], [1.6343715046E12, 68640.0], [1.6343715036E12, 109560.0], [1.6343715035E12, 62040.0], [1.6343715042E12, 106920.0], [1.6343715032E12, 112200.0], [1.6343715052E12, 137280.0], [1.6343715033E12, 62040.0], [1.6343715053E12, 68640.0], [1.6343715043E12, 118800.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 100, "maxX": 1.6343715053E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 2.072072072072072, "minX": 1.6343715028E12, "maxY": 9.295454545454541, "series": [{"data": [[1.634371505E12, 2.390804597701149], [1.6343715039E12, 2.308510638297872], [1.6343715049E12, 2.426666666666668], [1.6343715029E12, 3.622807017543861], [1.6343715051E12, 2.8202247191011245], [1.6343715031E12, 2.55223880597015], [1.6343715041E12, 6.642105263157894], [1.634371503E12, 2.376623376623377], [1.634371504E12, 2.072072072072072], [1.6343715037E12, 2.1232876712328763], [1.6343715047E12, 3.473684210526315], [1.6343715028E12, 9.295454545454541], [1.6343715038E12, 2.3703703703703707], [1.6343715048E12, 3.082474226804124], [1.6343715045E12, 2.399999999999999], [1.6343715044E12, 2.4285714285714284], [1.6343715034E12, 3.0000000000000004], [1.6343715046E12, 2.134615384615384], [1.6343715036E12, 2.7228915662650595], [1.6343715035E12, 2.659574468085107], [1.6343715042E12, 3.777777777777776], [1.6343715032E12, 2.8705882352941177], [1.6343715052E12, 2.3461538461538454], [1.6343715033E12, 3.0638297872340425], [1.6343715053E12, 2.6730769230769234], [1.6343715043E12, 2.7]], "isOverall": false, "label": "Query Order", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1.6343715053E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 1.8108108108108103, "minX": 1.6343715028E12, "maxY": 4.522727272727274, "series": [{"data": [[1.634371505E12, 2.298850574712645], [1.6343715039E12, 2.1382978723404262], [1.6343715049E12, 2.319999999999999], [1.6343715029E12, 2.9736842105263164], [1.6343715051E12, 2.5617977528089884], [1.6343715031E12, 2.3283582089552235], [1.6343715041E12, 4.242105263157896], [1.634371503E12, 2.1298701298701292], [1.634371504E12, 1.8108108108108103], [1.6343715037E12, 2.013698630136986], [1.6343715047E12, 3.3684210526315788], [1.6343715028E12, 4.522727272727274], [1.6343715038E12, 2.209876543209877], [1.6343715048E12, 2.5670103092783507], [1.6343715045E12, 2.1473684210526316], [1.6343715044E12, 2.153061224489796], [1.6343715034E12, 3.0000000000000004], [1.6343715046E12, 2.0576923076923084], [1.6343715036E12, 2.2891566265060237], [1.6343715035E12, 2.5531914893617023], [1.6343715042E12, 2.9382716049382718], [1.6343715032E12, 2.3411764705882345], [1.6343715052E12, 2.0192307692307687], [1.6343715033E12, 2.7234042553191484], [1.6343715053E12, 2.557692307692308], [1.6343715043E12, 2.2888888888888888]], "isOverall": false, "label": "Query Order", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1.6343715053E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.4134615384615383, "minX": 1.6343715028E12, "maxY": 1.473684210526315, "series": [{"data": [[1.634371505E12, 0.6551724137931036], [1.6343715039E12, 0.6170212765957445], [1.6343715049E12, 0.5066666666666665], [1.6343715029E12, 0.5701754385964914], [1.6343715051E12, 0.4719101123595507], [1.6343715031E12, 0.5074626865671641], [1.6343715041E12, 0.5368421052631578], [1.634371503E12, 0.5194805194805194], [1.634371504E12, 0.4324324324324324], [1.6343715037E12, 0.43835616438356173], [1.6343715047E12, 1.473684210526315], [1.6343715028E12, 0.4545454545454547], [1.6343715038E12, 0.4691358024691358], [1.6343715048E12, 0.7319587628865984], [1.6343715045E12, 0.5157894736842104], [1.6343715044E12, 0.5102040816326533], [1.6343715034E12, 1.3333333333333337], [1.6343715046E12, 0.576923076923077], [1.6343715036E12, 0.49397590361445765], [1.6343715035E12, 0.8723404255319148], [1.6343715042E12, 0.8271604938271602], [1.6343715032E12, 0.49411764705882355], [1.6343715052E12, 0.4134615384615383], [1.6343715033E12, 0.9574468085106383], [1.6343715053E12, 0.7884615384615385], [1.6343715043E12, 0.4222222222222221]], "isOverall": false, "label": "Query Order", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1.6343715053E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 1.0, "minX": 1.6343715028E12, "maxY": 42.0, "series": [{"data": [[1.634371505E12, 6.0], [1.6343715039E12, 5.0], [1.6343715049E12, 5.0], [1.6343715029E12, 42.0], [1.6343715051E12, 8.0], [1.6343715031E12, 9.0], [1.6343715041E12, 27.0], [1.634371503E12, 11.0], [1.634371504E12, 3.0], [1.6343715037E12, 4.0], [1.6343715047E12, 7.0], [1.6343715028E12, 16.0], [1.6343715038E12, 9.0], [1.6343715048E12, 18.0], [1.6343715045E12, 6.0], [1.6343715044E12, 6.0], [1.6343715034E12, 11.0], [1.6343715046E12, 5.0], [1.6343715036E12, 8.0], [1.6343715035E12, 7.0], [1.6343715042E12, 26.0], [1.6343715032E12, 6.0], [1.6343715052E12, 4.0], [1.6343715033E12, 9.0], [1.6343715053E12, 8.0], [1.6343715043E12, 9.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.634371505E12, 4.0], [1.6343715039E12, 4.0], [1.6343715049E12, 4.0], [1.6343715029E12, 8.5], [1.6343715051E12, 5.0], [1.6343715031E12, 4.200000000000003], [1.6343715041E12, 19.0], [1.634371503E12, 4.0], [1.634371504E12, 3.0], [1.6343715037E12, 3.0], [1.6343715047E12, 6.0], [1.6343715028E12, 12.0], [1.6343715038E12, 3.799999999999997], [1.6343715048E12, 5.0], [1.6343715045E12, 4.0], [1.6343715044E12, 4.0], [1.6343715034E12, 5.5], [1.6343715046E12, 3.700000000000003], [1.6343715036E12, 4.0], [1.6343715035E12, 4.200000000000003], [1.6343715042E12, 8.0], [1.6343715032E12, 5.0], [1.6343715052E12, 4.0], [1.6343715033E12, 5.0], [1.6343715053E12, 5.0], [1.6343715043E12, 5.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.634371505E12, 6.0], [1.6343715039E12, 5.0], [1.6343715049E12, 5.0], [1.6343715029E12, 39.2999999999999], [1.6343715051E12, 8.0], [1.6343715031E12, 9.0], [1.6343715041E12, 27.0], [1.634371503E12, 11.0], [1.634371504E12, 3.0], [1.6343715037E12, 4.0], [1.6343715047E12, 7.0], [1.6343715028E12, 16.0], [1.6343715038E12, 9.0], [1.6343715048E12, 18.0], [1.6343715045E12, 6.0], [1.6343715044E12, 6.0], [1.6343715034E12, 11.0], [1.6343715046E12, 5.0], [1.6343715036E12, 8.0], [1.6343715035E12, 7.0], [1.6343715042E12, 26.0], [1.6343715032E12, 6.0], [1.6343715052E12, 4.0], [1.6343715033E12, 9.0], [1.6343715053E12, 8.0], [1.6343715043E12, 9.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.634371505E12, 5.0], [1.6343715039E12, 4.0], [1.6343715049E12, 5.0], [1.6343715029E12, 11.25], [1.6343715051E12, 6.0], [1.6343715031E12, 6.0], [1.6343715041E12, 20.19999999999999], [1.634371503E12, 4.0], [1.634371504E12, 3.0], [1.6343715037E12, 4.0], [1.6343715047E12, 7.0], [1.6343715028E12, 12.75], [1.6343715038E12, 4.0], [1.6343715048E12, 6.199999999999989], [1.6343715045E12, 4.0], [1.6343715044E12, 4.049999999999997], [1.6343715034E12, 9.75], [1.6343715046E12, 4.0], [1.6343715036E12, 4.799999999999997], [1.6343715035E12, 5.599999999999994], [1.6343715042E12, 9.0], [1.6343715032E12, 5.700000000000003], [1.6343715052E12, 4.0], [1.6343715033E12, 6.199999999999989], [1.6343715053E12, 6.349999999999994], [1.6343715043E12, 5.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.634371505E12, 1.0], [1.6343715039E12, 1.0], [1.6343715049E12, 1.0], [1.6343715029E12, 1.0], [1.6343715051E12, 1.0], [1.6343715031E12, 1.0], [1.6343715041E12, 1.0], [1.634371503E12, 1.0], [1.634371504E12, 1.0], [1.6343715037E12, 1.0], [1.6343715047E12, 1.0], [1.6343715028E12, 5.0], [1.6343715038E12, 1.0], [1.6343715048E12, 1.0], [1.6343715045E12, 1.0], [1.6343715044E12, 1.0], [1.6343715034E12, 1.0], [1.6343715046E12, 1.0], [1.6343715036E12, 1.0], [1.6343715035E12, 1.0], [1.6343715042E12, 1.0], [1.6343715032E12, 1.0], [1.6343715052E12, 1.0], [1.6343715033E12, 1.0], [1.6343715053E12, 1.0], [1.6343715043E12, 1.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.634371505E12, 2.0], [1.6343715039E12, 2.0], [1.6343715049E12, 2.0], [1.6343715029E12, 2.0], [1.6343715051E12, 2.0], [1.6343715031E12, 2.0], [1.6343715041E12, 3.0], [1.634371503E12, 2.0], [1.634371504E12, 2.0], [1.6343715037E12, 2.0], [1.6343715047E12, 3.0], [1.6343715028E12, 9.0], [1.6343715038E12, 2.0], [1.6343715048E12, 3.0], [1.6343715045E12, 2.0], [1.6343715044E12, 2.0], [1.6343715034E12, 2.0], [1.6343715046E12, 2.0], [1.6343715036E12, 3.0], [1.6343715035E12, 2.0], [1.6343715042E12, 3.0], [1.6343715032E12, 2.0], [1.6343715052E12, 2.0], [1.6343715033E12, 2.0], [1.6343715053E12, 2.0], [1.6343715043E12, 2.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 100, "maxX": 1.6343715053E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 2.0, "minX": 158.0, "maxY": 3.0, "series": [{"data": [[158.0, 3.0], [332.0, 2.0], [678.0, 2.0], [832.0, 2.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 832.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 2.0, "minX": 158.0, "maxY": 2.5, "series": [{"data": [[158.0, 2.5], [332.0, 2.0], [678.0, 2.0], [832.0, 2.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 832.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 250.0, "minX": 1.6343715028E12, "maxY": 1090.0, "series": [{"data": [[1.634371505E12, 850.0], [1.6343715039E12, 960.0], [1.6343715049E12, 770.0], [1.6343715029E12, 1000.0], [1.6343715051E12, 900.0], [1.6343715031E12, 690.0], [1.6343715041E12, 970.0], [1.634371503E12, 760.0], [1.634371504E12, 1090.0], [1.6343715037E12, 720.0], [1.6343715047E12, 370.0], [1.6343715028E12, 590.0], [1.6343715038E12, 810.0], [1.6343715048E12, 980.0], [1.6343715045E12, 960.0], [1.6343715044E12, 940.0], [1.6343715034E12, 250.0], [1.6343715046E12, 520.0], [1.6343715036E12, 820.0], [1.6343715035E12, 470.0], [1.6343715042E12, 790.0], [1.6343715032E12, 850.0], [1.6343715052E12, 1050.0], [1.6343715033E12, 470.0], [1.6343715053E12, 480.0], [1.6343715043E12, 940.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 100, "maxX": 1.6343715053E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 240.0, "minX": 1.6343715028E12, "maxY": 1140.0, "series": [{"data": [[1.634371505E12, 870.0], [1.6343715039E12, 940.0], [1.6343715049E12, 750.0], [1.6343715029E12, 1140.0], [1.6343715051E12, 890.0], [1.6343715031E12, 670.0], [1.6343715041E12, 950.0], [1.634371503E12, 770.0], [1.634371504E12, 1110.0], [1.6343715037E12, 730.0], [1.6343715047E12, 380.0], [1.6343715028E12, 440.0], [1.6343715038E12, 810.0], [1.6343715048E12, 970.0], [1.6343715045E12, 950.0], [1.6343715044E12, 980.0], [1.6343715034E12, 240.0], [1.6343715046E12, 520.0], [1.6343715036E12, 830.0], [1.6343715035E12, 470.0], [1.6343715042E12, 810.0], [1.6343715032E12, 850.0], [1.6343715052E12, 1040.0], [1.6343715033E12, 470.0], [1.6343715053E12, 520.0], [1.6343715043E12, 900.0]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 100, "maxX": 1.6343715053E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 240.0, "minX": 1.6343715028E12, "maxY": 1140.0, "series": [{"data": [[1.634371505E12, 870.0], [1.6343715039E12, 940.0], [1.6343715049E12, 750.0], [1.6343715029E12, 1140.0], [1.6343715051E12, 890.0], [1.6343715031E12, 670.0], [1.6343715041E12, 950.0], [1.634371503E12, 770.0], [1.634371504E12, 1110.0], [1.6343715037E12, 730.0], [1.6343715047E12, 380.0], [1.6343715028E12, 440.0], [1.6343715038E12, 810.0], [1.6343715048E12, 970.0], [1.6343715045E12, 950.0], [1.6343715044E12, 980.0], [1.6343715034E12, 240.0], [1.6343715046E12, 520.0], [1.6343715036E12, 830.0], [1.6343715035E12, 470.0], [1.6343715042E12, 810.0], [1.6343715032E12, 850.0], [1.6343715052E12, 1040.0], [1.6343715033E12, 470.0], [1.6343715053E12, 520.0], [1.6343715043E12, 900.0]], "isOverall": false, "label": "Query Order-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1.6343715053E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 240.0, "minX": 1.6343715028E12, "maxY": 1140.0, "series": [{"data": [[1.634371505E12, 870.0], [1.6343715039E12, 940.0], [1.6343715049E12, 750.0], [1.6343715029E12, 1140.0], [1.6343715051E12, 890.0], [1.6343715031E12, 670.0], [1.6343715041E12, 950.0], [1.634371503E12, 770.0], [1.634371504E12, 1110.0], [1.6343715037E12, 730.0], [1.6343715047E12, 380.0], [1.6343715028E12, 440.0], [1.6343715038E12, 810.0], [1.6343715048E12, 970.0], [1.6343715045E12, 950.0], [1.6343715044E12, 980.0], [1.6343715034E12, 240.0], [1.6343715046E12, 520.0], [1.6343715036E12, 830.0], [1.6343715035E12, 470.0], [1.6343715042E12, 810.0], [1.6343715032E12, 850.0], [1.6343715052E12, 1040.0], [1.6343715033E12, 470.0], [1.6343715053E12, 520.0], [1.6343715043E12, 900.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1.6343715053E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

