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
        data: {"result": {"minY": 15.0, "minX": 0.0, "maxY": 74.0, "series": [{"data": [[0.0, 15.0], [0.1, 15.0], [0.2, 15.0], [0.3, 15.0], [0.4, 15.0], [0.5, 15.0], [0.6, 15.0], [0.7, 15.0], [0.8, 16.0], [0.9, 16.0], [1.0, 17.0], [1.1, 17.0], [1.2, 17.0], [1.3, 17.0], [1.4, 17.0], [1.5, 17.0], [1.6, 17.0], [1.7, 17.0], [1.8, 17.0], [1.9, 17.0], [2.0, 17.0], [2.1, 17.0], [2.2, 17.0], [2.3, 17.0], [2.4, 17.0], [2.5, 17.0], [2.6, 18.0], [2.7, 18.0], [2.8, 18.0], [2.9, 18.0], [3.0, 18.0], [3.1, 18.0], [3.2, 18.0], [3.3, 18.0], [3.4, 18.0], [3.5, 18.0], [3.6, 18.0], [3.7, 18.0], [3.8, 18.0], [3.9, 18.0], [4.0, 18.0], [4.1, 18.0], [4.2, 18.0], [4.3, 18.0], [4.4, 18.0], [4.5, 18.0], [4.6, 18.0], [4.7, 18.0], [4.8, 18.0], [4.9, 18.0], [5.0, 18.0], [5.1, 18.0], [5.2, 18.0], [5.3, 18.0], [5.4, 19.0], [5.5, 19.0], [5.6, 19.0], [5.7, 19.0], [5.8, 19.0], [5.9, 19.0], [6.0, 19.0], [6.1, 19.0], [6.2, 19.0], [6.3, 19.0], [6.4, 19.0], [6.5, 19.0], [6.6, 19.0], [6.7, 19.0], [6.8, 19.0], [6.9, 19.0], [7.0, 19.0], [7.1, 19.0], [7.2, 19.0], [7.3, 19.0], [7.4, 19.0], [7.5, 19.0], [7.6, 19.0], [7.7, 19.0], [7.8, 19.0], [7.9, 19.0], [8.0, 19.0], [8.1, 19.0], [8.2, 19.0], [8.3, 19.0], [8.4, 19.0], [8.5, 19.0], [8.6, 19.0], [8.7, 19.0], [8.8, 19.0], [8.9, 19.0], [9.0, 19.0], [9.1, 19.0], [9.2, 20.0], [9.3, 20.0], [9.4, 20.0], [9.5, 20.0], [9.6, 20.0], [9.7, 20.0], [9.8, 20.0], [9.9, 20.0], [10.0, 20.0], [10.1, 20.0], [10.2, 20.0], [10.3, 20.0], [10.4, 20.0], [10.5, 20.0], [10.6, 20.0], [10.7, 20.0], [10.8, 20.0], [10.9, 20.0], [11.0, 20.0], [11.1, 20.0], [11.2, 20.0], [11.3, 20.0], [11.4, 20.0], [11.5, 20.0], [11.6, 20.0], [11.7, 20.0], [11.8, 20.0], [11.9, 20.0], [12.0, 20.0], [12.1, 20.0], [12.2, 20.0], [12.3, 20.0], [12.4, 20.0], [12.5, 20.0], [12.6, 20.0], [12.7, 20.0], [12.8, 20.0], [12.9, 20.0], [13.0, 20.0], [13.1, 20.0], [13.2, 20.0], [13.3, 20.0], [13.4, 20.0], [13.5, 20.0], [13.6, 20.0], [13.7, 20.0], [13.8, 20.0], [13.9, 20.0], [14.0, 20.0], [14.1, 20.0], [14.2, 21.0], [14.3, 21.0], [14.4, 21.0], [14.5, 21.0], [14.6, 21.0], [14.7, 21.0], [14.8, 21.0], [14.9, 21.0], [15.0, 21.0], [15.1, 21.0], [15.2, 21.0], [15.3, 21.0], [15.4, 21.0], [15.5, 21.0], [15.6, 21.0], [15.7, 21.0], [15.8, 21.0], [15.9, 21.0], [16.0, 21.0], [16.1, 21.0], [16.2, 21.0], [16.3, 21.0], [16.4, 21.0], [16.5, 21.0], [16.6, 21.0], [16.7, 21.0], [16.8, 21.0], [16.9, 21.0], [17.0, 21.0], [17.1, 21.0], [17.2, 21.0], [17.3, 21.0], [17.4, 21.0], [17.5, 21.0], [17.6, 21.0], [17.7, 21.0], [17.8, 21.0], [17.9, 21.0], [18.0, 22.0], [18.1, 22.0], [18.2, 22.0], [18.3, 22.0], [18.4, 22.0], [18.5, 22.0], [18.6, 22.0], [18.7, 22.0], [18.8, 22.0], [18.9, 22.0], [19.0, 22.0], [19.1, 22.0], [19.2, 22.0], [19.3, 22.0], [19.4, 22.0], [19.5, 22.0], [19.6, 22.0], [19.7, 22.0], [19.8, 22.0], [19.9, 22.0], [20.0, 22.0], [20.1, 22.0], [20.2, 22.0], [20.3, 22.0], [20.4, 22.0], [20.5, 22.0], [20.6, 22.0], [20.7, 22.0], [20.8, 22.0], [20.9, 22.0], [21.0, 22.0], [21.1, 22.0], [21.2, 22.0], [21.3, 22.0], [21.4, 22.0], [21.5, 22.0], [21.6, 22.0], [21.7, 22.0], [21.8, 22.0], [21.9, 22.0], [22.0, 22.0], [22.1, 22.0], [22.2, 22.0], [22.3, 22.0], [22.4, 22.0], [22.5, 22.0], [22.6, 22.0], [22.7, 22.0], [22.8, 22.0], [22.9, 22.0], [23.0, 22.0], [23.1, 22.0], [23.2, 22.0], [23.3, 22.0], [23.4, 22.0], [23.5, 22.0], [23.6, 22.0], [23.7, 22.0], [23.8, 22.0], [23.9, 22.0], [24.0, 22.0], [24.1, 22.0], [24.2, 22.0], [24.3, 22.0], [24.4, 22.0], [24.5, 22.0], [24.6, 22.0], [24.7, 22.0], [24.8, 22.0], [24.9, 22.0], [25.0, 22.0], [25.1, 22.0], [25.2, 23.0], [25.3, 23.0], [25.4, 23.0], [25.5, 23.0], [25.6, 23.0], [25.7, 23.0], [25.8, 23.0], [25.9, 23.0], [26.0, 23.0], [26.1, 23.0], [26.2, 23.0], [26.3, 23.0], [26.4, 23.0], [26.5, 23.0], [26.6, 23.0], [26.7, 23.0], [26.8, 23.0], [26.9, 23.0], [27.0, 23.0], [27.1, 23.0], [27.2, 23.0], [27.3, 23.0], [27.4, 23.0], [27.5, 23.0], [27.6, 23.0], [27.7, 23.0], [27.8, 23.0], [27.9, 23.0], [28.0, 23.0], [28.1, 23.0], [28.2, 23.0], [28.3, 23.0], [28.4, 23.0], [28.5, 23.0], [28.6, 23.0], [28.7, 23.0], [28.8, 23.0], [28.9, 23.0], [29.0, 23.0], [29.1, 23.0], [29.2, 23.0], [29.3, 23.0], [29.4, 23.0], [29.5, 23.0], [29.6, 23.0], [29.7, 23.0], [29.8, 23.0], [29.9, 23.0], [30.0, 23.0], [30.1, 23.0], [30.2, 23.0], [30.3, 23.0], [30.4, 23.0], [30.5, 23.0], [30.6, 23.0], [30.7, 23.0], [30.8, 23.0], [30.9, 23.0], [31.0, 23.0], [31.1, 23.0], [31.2, 23.0], [31.3, 23.0], [31.4, 23.0], [31.5, 23.0], [31.6, 23.0], [31.7, 23.0], [31.8, 23.0], [31.9, 23.0], [32.0, 23.0], [32.1, 23.0], [32.2, 23.0], [32.3, 23.0], [32.4, 23.0], [32.5, 23.0], [32.6, 23.0], [32.7, 23.0], [32.8, 23.0], [32.9, 23.0], [33.0, 23.0], [33.1, 23.0], [33.2, 23.0], [33.3, 23.0], [33.4, 24.0], [33.5, 24.0], [33.6, 24.0], [33.7, 24.0], [33.8, 24.0], [33.9, 24.0], [34.0, 24.0], [34.1, 24.0], [34.2, 24.0], [34.3, 24.0], [34.4, 24.0], [34.5, 24.0], [34.6, 24.0], [34.7, 24.0], [34.8, 24.0], [34.9, 24.0], [35.0, 24.0], [35.1, 24.0], [35.2, 24.0], [35.3, 24.0], [35.4, 24.0], [35.5, 24.0], [35.6, 24.0], [35.7, 24.0], [35.8, 24.0], [35.9, 24.0], [36.0, 24.0], [36.1, 24.0], [36.2, 24.0], [36.3, 24.0], [36.4, 24.0], [36.5, 24.0], [36.6, 24.0], [36.7, 24.0], [36.8, 24.0], [36.9, 24.0], [37.0, 24.0], [37.1, 24.0], [37.2, 24.0], [37.3, 24.0], [37.4, 24.0], [37.5, 24.0], [37.6, 24.0], [37.7, 24.0], [37.8, 24.0], [37.9, 24.0], [38.0, 24.0], [38.1, 24.0], [38.2, 24.0], [38.3, 24.0], [38.4, 24.0], [38.5, 24.0], [38.6, 24.0], [38.7, 24.0], [38.8, 24.0], [38.9, 24.0], [39.0, 24.0], [39.1, 24.0], [39.2, 24.0], [39.3, 24.0], [39.4, 24.0], [39.5, 24.0], [39.6, 24.0], [39.7, 24.0], [39.8, 24.0], [39.9, 24.0], [40.0, 24.0], [40.1, 24.0], [40.2, 24.0], [40.3, 24.0], [40.4, 24.0], [40.5, 24.0], [40.6, 24.0], [40.7, 24.0], [40.8, 24.0], [40.9, 24.0], [41.0, 24.0], [41.1, 24.0], [41.2, 24.0], [41.3, 24.0], [41.4, 24.0], [41.5, 24.0], [41.6, 25.0], [41.7, 25.0], [41.8, 25.0], [41.9, 25.0], [42.0, 25.0], [42.1, 25.0], [42.2, 25.0], [42.3, 25.0], [42.4, 25.0], [42.5, 25.0], [42.6, 25.0], [42.7, 25.0], [42.8, 25.0], [42.9, 25.0], [43.0, 25.0], [43.1, 25.0], [43.2, 25.0], [43.3, 25.0], [43.4, 25.0], [43.5, 25.0], [43.6, 25.0], [43.7, 25.0], [43.8, 25.0], [43.9, 25.0], [44.0, 25.0], [44.1, 25.0], [44.2, 25.0], [44.3, 25.0], [44.4, 25.0], [44.5, 25.0], [44.6, 25.0], [44.7, 25.0], [44.8, 25.0], [44.9, 25.0], [45.0, 25.0], [45.1, 25.0], [45.2, 25.0], [45.3, 25.0], [45.4, 25.0], [45.5, 25.0], [45.6, 25.0], [45.7, 25.0], [45.8, 25.0], [45.9, 25.0], [46.0, 25.0], [46.1, 25.0], [46.2, 25.0], [46.3, 25.0], [46.4, 25.0], [46.5, 25.0], [46.6, 25.0], [46.7, 25.0], [46.8, 25.0], [46.9, 25.0], [47.0, 25.0], [47.1, 25.0], [47.2, 25.0], [47.3, 25.0], [47.4, 25.0], [47.5, 25.0], [47.6, 25.0], [47.7, 25.0], [47.8, 25.0], [47.9, 25.0], [48.0, 25.0], [48.1, 25.0], [48.2, 25.0], [48.3, 25.0], [48.4, 25.0], [48.5, 25.0], [48.6, 25.0], [48.7, 25.0], [48.8, 25.0], [48.9, 25.0], [49.0, 25.0], [49.1, 25.0], [49.2, 25.0], [49.3, 25.0], [49.4, 26.0], [49.5, 26.0], [49.6, 26.0], [49.7, 26.0], [49.8, 26.0], [49.9, 26.0], [50.0, 26.0], [50.1, 26.0], [50.2, 26.0], [50.3, 26.0], [50.4, 26.0], [50.5, 26.0], [50.6, 26.0], [50.7, 26.0], [50.8, 26.0], [50.9, 26.0], [51.0, 26.0], [51.1, 26.0], [51.2, 26.0], [51.3, 26.0], [51.4, 26.0], [51.5, 26.0], [51.6, 26.0], [51.7, 26.0], [51.8, 26.0], [51.9, 26.0], [52.0, 26.0], [52.1, 26.0], [52.2, 26.0], [52.3, 26.0], [52.4, 26.0], [52.5, 26.0], [52.6, 26.0], [52.7, 26.0], [52.8, 26.0], [52.9, 26.0], [53.0, 26.0], [53.1, 26.0], [53.2, 26.0], [53.3, 26.0], [53.4, 26.0], [53.5, 26.0], [53.6, 26.0], [53.7, 26.0], [53.8, 26.0], [53.9, 26.0], [54.0, 26.0], [54.1, 26.0], [54.2, 26.0], [54.3, 26.0], [54.4, 26.0], [54.5, 26.0], [54.6, 26.0], [54.7, 26.0], [54.8, 26.0], [54.9, 26.0], [55.0, 26.0], [55.1, 26.0], [55.2, 26.0], [55.3, 26.0], [55.4, 26.0], [55.5, 26.0], [55.6, 26.0], [55.7, 26.0], [55.8, 26.0], [55.9, 26.0], [56.0, 26.0], [56.1, 26.0], [56.2, 26.0], [56.3, 26.0], [56.4, 26.0], [56.5, 26.0], [56.6, 27.0], [56.7, 27.0], [56.8, 27.0], [56.9, 27.0], [57.0, 27.0], [57.1, 27.0], [57.2, 27.0], [57.3, 27.0], [57.4, 27.0], [57.5, 27.0], [57.6, 27.0], [57.7, 27.0], [57.8, 27.0], [57.9, 27.0], [58.0, 27.0], [58.1, 27.0], [58.2, 27.0], [58.3, 27.0], [58.4, 27.0], [58.5, 27.0], [58.6, 27.0], [58.7, 27.0], [58.8, 27.0], [58.9, 27.0], [59.0, 27.0], [59.1, 27.0], [59.2, 27.0], [59.3, 27.0], [59.4, 27.0], [59.5, 27.0], [59.6, 27.0], [59.7, 27.0], [59.8, 27.0], [59.9, 27.0], [60.0, 27.0], [60.1, 27.0], [60.2, 27.0], [60.3, 27.0], [60.4, 27.0], [60.5, 27.0], [60.6, 27.0], [60.7, 27.0], [60.8, 27.0], [60.9, 27.0], [61.0, 27.0], [61.1, 27.0], [61.2, 27.0], [61.3, 27.0], [61.4, 27.0], [61.5, 27.0], [61.6, 27.0], [61.7, 27.0], [61.8, 27.0], [61.9, 27.0], [62.0, 27.0], [62.1, 27.0], [62.2, 27.0], [62.3, 27.0], [62.4, 27.0], [62.5, 27.0], [62.6, 27.0], [62.7, 27.0], [62.8, 27.0], [62.9, 27.0], [63.0, 28.0], [63.1, 28.0], [63.2, 28.0], [63.3, 28.0], [63.4, 28.0], [63.5, 28.0], [63.6, 28.0], [63.7, 28.0], [63.8, 28.0], [63.9, 28.0], [64.0, 28.0], [64.1, 28.0], [64.2, 28.0], [64.3, 28.0], [64.4, 28.0], [64.5, 28.0], [64.6, 28.0], [64.7, 28.0], [64.8, 28.0], [64.9, 28.0], [65.0, 28.0], [65.1, 28.0], [65.2, 28.0], [65.3, 28.0], [65.4, 28.0], [65.5, 28.0], [65.6, 28.0], [65.7, 28.0], [65.8, 28.0], [65.9, 28.0], [66.0, 28.0], [66.1, 28.0], [66.2, 28.0], [66.3, 28.0], [66.4, 28.0], [66.5, 28.0], [66.6, 28.0], [66.7, 28.0], [66.8, 28.0], [66.9, 28.0], [67.0, 28.0], [67.1, 28.0], [67.2, 28.0], [67.3, 28.0], [67.4, 28.0], [67.5, 28.0], [67.6, 28.0], [67.7, 28.0], [67.8, 28.0], [67.9, 28.0], [68.0, 28.0], [68.1, 28.0], [68.2, 28.0], [68.3, 28.0], [68.4, 28.0], [68.5, 28.0], [68.6, 28.0], [68.7, 28.0], [68.8, 28.0], [68.9, 28.0], [69.0, 28.0], [69.1, 28.0], [69.2, 28.0], [69.3, 28.0], [69.4, 28.0], [69.5, 28.0], [69.6, 28.0], [69.7, 28.0], [69.8, 28.0], [69.9, 28.0], [70.0, 28.0], [70.1, 28.0], [70.2, 28.0], [70.3, 28.0], [70.4, 28.0], [70.5, 28.0], [70.6, 28.0], [70.7, 28.0], [70.8, 29.0], [70.9, 29.0], [71.0, 29.0], [71.1, 29.0], [71.2, 29.0], [71.3, 29.0], [71.4, 29.0], [71.5, 29.0], [71.6, 29.0], [71.7, 29.0], [71.8, 29.0], [71.9, 29.0], [72.0, 29.0], [72.1, 29.0], [72.2, 29.0], [72.3, 29.0], [72.4, 29.0], [72.5, 29.0], [72.6, 29.0], [72.7, 29.0], [72.8, 29.0], [72.9, 29.0], [73.0, 29.0], [73.1, 29.0], [73.2, 29.0], [73.3, 29.0], [73.4, 29.0], [73.5, 29.0], [73.6, 29.0], [73.7, 29.0], [73.8, 29.0], [73.9, 29.0], [74.0, 29.0], [74.1, 29.0], [74.2, 29.0], [74.3, 29.0], [74.4, 29.0], [74.5, 29.0], [74.6, 29.0], [74.7, 29.0], [74.8, 29.0], [74.9, 29.0], [75.0, 29.0], [75.1, 29.0], [75.2, 30.0], [75.3, 30.0], [75.4, 30.0], [75.5, 30.0], [75.6, 30.0], [75.7, 30.0], [75.8, 30.0], [75.9, 30.0], [76.0, 30.0], [76.1, 30.0], [76.2, 30.0], [76.3, 30.0], [76.4, 30.0], [76.5, 30.0], [76.6, 30.0], [76.7, 30.0], [76.8, 30.0], [76.9, 30.0], [77.0, 30.0], [77.1, 30.0], [77.2, 30.0], [77.3, 30.0], [77.4, 30.0], [77.5, 30.0], [77.6, 30.0], [77.7, 30.0], [77.8, 30.0], [77.9, 30.0], [78.0, 30.0], [78.1, 30.0], [78.2, 30.0], [78.3, 30.0], [78.4, 30.0], [78.5, 30.0], [78.6, 30.0], [78.7, 31.0], [78.8, 31.0], [78.9, 31.0], [79.0, 31.0], [79.1, 31.0], [79.2, 31.0], [79.3, 31.0], [79.4, 31.0], [79.5, 31.0], [79.6, 31.0], [79.7, 31.0], [79.8, 31.0], [79.9, 31.0], [80.0, 31.0], [80.1, 31.0], [80.2, 31.0], [80.3, 31.0], [80.4, 31.0], [80.5, 31.0], [80.6, 31.0], [80.7, 31.0], [80.8, 31.0], [80.9, 31.0], [81.0, 31.0], [81.1, 31.0], [81.2, 31.0], [81.3, 31.0], [81.4, 31.0], [81.5, 31.0], [81.6, 31.0], [81.7, 32.0], [81.8, 32.0], [81.9, 32.0], [82.0, 32.0], [82.1, 32.0], [82.2, 32.0], [82.3, 32.0], [82.4, 32.0], [82.5, 32.0], [82.6, 32.0], [82.7, 32.0], [82.8, 32.0], [82.9, 33.0], [83.0, 33.0], [83.1, 33.0], [83.2, 33.0], [83.3, 33.0], [83.4, 33.0], [83.5, 33.0], [83.6, 33.0], [83.7, 33.0], [83.8, 33.0], [83.9, 34.0], [84.0, 34.0], [84.1, 34.0], [84.2, 34.0], [84.3, 34.0], [84.4, 34.0], [84.5, 34.0], [84.6, 34.0], [84.7, 34.0], [84.8, 34.0], [84.9, 34.0], [85.0, 34.0], [85.1, 35.0], [85.2, 35.0], [85.3, 35.0], [85.4, 35.0], [85.5, 35.0], [85.6, 35.0], [85.7, 35.0], [85.8, 35.0], [85.9, 35.0], [86.0, 35.0], [86.1, 35.0], [86.2, 35.0], [86.3, 35.0], [86.4, 35.0], [86.5, 36.0], [86.6, 36.0], [86.7, 36.0], [86.8, 36.0], [86.9, 36.0], [87.0, 36.0], [87.1, 36.0], [87.2, 36.0], [87.3, 37.0], [87.4, 37.0], [87.5, 37.0], [87.6, 37.0], [87.7, 37.0], [87.8, 37.0], [87.9, 38.0], [88.0, 38.0], [88.1, 38.0], [88.2, 38.0], [88.3, 38.0], [88.4, 39.0], [88.5, 39.0], [88.6, 39.0], [88.7, 39.0], [88.8, 39.0], [88.9, 39.0], [89.0, 39.0], [89.1, 39.0], [89.2, 40.0], [89.3, 40.0], [89.4, 40.0], [89.5, 40.0], [89.6, 40.0], [89.7, 40.0], [89.8, 40.0], [89.9, 40.0], [90.0, 40.0], [90.1, 40.0], [90.2, 41.0], [90.3, 41.0], [90.4, 41.0], [90.5, 41.0], [90.6, 41.0], [90.7, 41.0], [90.8, 41.0], [90.9, 41.0], [91.0, 41.0], [91.1, 41.0], [91.2, 42.0], [91.3, 42.0], [91.4, 43.0], [91.5, 43.0], [91.6, 43.0], [91.7, 43.0], [91.8, 43.0], [91.9, 44.0], [92.0, 44.0], [92.1, 45.0], [92.2, 45.0], [92.3, 46.0], [92.4, 46.0], [92.5, 46.0], [92.6, 46.0], [92.7, 47.0], [92.8, 47.0], [92.9, 47.0], [93.0, 47.0], [93.1, 48.0], [93.2, 48.0], [93.3, 48.0], [93.4, 48.0], [93.5, 48.0], [93.6, 48.0], [93.7, 49.0], [93.8, 49.0], [93.9, 50.0], [94.0, 50.0], [94.1, 50.0], [94.2, 50.0], [94.3, 50.0], [94.4, 50.0], [94.5, 50.0], [94.6, 50.0], [94.7, 52.0], [94.8, 52.0], [94.9, 52.0], [95.0, 52.0], [95.1, 53.0], [95.2, 53.0], [95.3, 53.0], [95.4, 53.0], [95.5, 54.0], [95.6, 54.0], [95.7, 55.0], [95.8, 55.0], [95.9, 57.0], [96.0, 57.0], [96.1, 57.0], [96.2, 57.0], [96.3, 57.0], [96.4, 57.0], [96.5, 57.0], [96.6, 57.0], [96.7, 58.0], [96.8, 58.0], [96.9, 58.0], [97.0, 58.0], [97.1, 58.0], [97.2, 58.0], [97.3, 58.0], [97.4, 58.0], [97.5, 59.0], [97.6, 59.0], [97.7, 59.0], [97.8, 59.0], [97.9, 59.0], [98.0, 59.0], [98.1, 59.0], [98.2, 59.0], [98.3, 59.0], [98.4, 59.0], [98.5, 60.0], [98.6, 60.0], [98.7, 60.0], [98.8, 60.0], [98.9, 60.0], [99.0, 60.0], [99.1, 61.0], [99.2, 61.0], [99.3, 62.0], [99.4, 62.0], [99.5, 64.0], [99.6, 64.0], [99.7, 66.0], [99.8, 66.0], [99.9, 74.0], [100.0, 74.0]], "isOverall": false, "label": "Create Order", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 500.0, "minX": 0.0, "maxY": 500.0, "series": [{"data": [[0.0, 500.0]], "isOverall": false, "label": "Create Order", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4.9E-324, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 500.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 500.0, "series": [{"data": [[0.0, 500.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 8.406249999999998, "minX": 1.634372822E12, "maxY": 118.0357142857143, "series": [{"data": [[1.6343728226E12, 14.728813559322033], [1.6343728221E12, 53.03921568627452], [1.6343728229E12, 12.530612244897965], [1.6343728223E12, 118.0357142857143], [1.6343728228E12, 13.374999999999998], [1.6343728231E12, 14.578947368421053], [1.634372823E12, 8.406249999999998], [1.6343728225E12, 9.483870967741936], [1.634372822E12, 22.0], [1.6343728224E12, 9.129032258064518], [1.6343728227E12, 22.119047619047613], [1.6343728222E12, 109.05454545454543]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 100, "maxX": 1.6343728231E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 20.0, "minX": 1.0, "maxY": 61.0, "series": [{"data": [[3.0, 39.0], [4.0, 25.25], [5.0, 24.0625], [6.0, 23.500000000000004], [7.0, 24.549999999999997], [8.0, 25.307692307692307], [9.0, 23.842105263157894], [10.0, 29.5], [11.0, 26.476190476190478], [12.0, 25.14814814814815], [13.0, 27.583333333333332], [14.0, 27.04], [15.0, 25.631578947368418], [16.0, 27.0], [17.0, 29.733333333333334], [18.0, 30.450000000000003], [19.0, 30.93333333333333], [20.0, 28.142857142857142], [21.0, 45.5], [22.0, 35.5], [23.0, 43.0], [24.0, 34.5], [25.0, 29.666666666666664], [26.0, 41.5], [27.0, 30.75], [28.0, 35.5], [29.0, 37.5], [30.0, 58.5], [31.0, 24.666666666666668], [33.0, 61.0], [32.0, 60.0], [34.0, 32.25], [35.0, 30.0], [36.0, 61.0], [38.0, 39.3], [41.0, 23.5], [43.0, 28.666666666666668], [44.0, 23.0], [47.0, 22.5], [51.0, 22.666666666666668], [53.0, 23.5], [56.0, 27.0], [59.0, 28.0], [62.0, 28.0], [64.0, 26.75], [68.0, 26.0], [69.0, 28.0], [71.0, 23.2], [76.0, 22.4], [78.0, 22.0], [85.0, 24.857142857142858], [88.0, 22.5], [90.0, 22.0], [91.0, 25.0], [89.0, 26.0], [93.0, 24.0], [98.0, 27.0], [96.0, 23.0], [97.0, 27.5], [100.0, 27.0], [104.0, 27.0], [105.0, 24.8], [111.0, 26.0], [117.0, 25.833333333333332], [122.0, 23.5], [127.0, 25.666666666666668], [128.0, 23.666666666666668], [133.0, 25.333333333333332], [134.0, 23.0], [135.0, 25.0], [142.0, 27.25], [149.0, 32.375], [159.0, 28.437499999999996], [154.0, 25.0], [165.0, 24.0], [160.0, 20.0], [1.0, 33.0]], "isOverall": false, "label": "Create Order", "isController": false}, {"data": [[40.02399999999998, 28.071999999999992]], "isOverall": false, "label": "Create Order-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 165.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 34560.0, "minX": 1.634372822E12, "maxY": 248390.0, "series": [{"data": [[1.6343728226E12, 127440.0], [1.6343728221E12, 110160.0], [1.6343728229E12, 105840.0], [1.6343728223E12, 120960.0], [1.6343728228E12, 86400.0], [1.6343728231E12, 82080.0], [1.634372823E12, 69120.0], [1.6343728225E12, 66960.0], [1.634372822E12, 34560.0], [1.6343728224E12, 66960.0], [1.6343728227E12, 90720.0], [1.6343728222E12, 118800.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6343728226E12, 248390.0], [1.6343728221E12, 214710.0], [1.6343728229E12, 206290.0], [1.6343728223E12, 235760.0], [1.6343728228E12, 168400.0], [1.6343728231E12, 159980.0], [1.634372823E12, 134720.0], [1.6343728225E12, 130510.0], [1.634372822E12, 67360.0], [1.6343728224E12, 130510.0], [1.6343728227E12, 176820.0], [1.6343728222E12, 231550.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 100, "maxX": 1.6343728231E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 20.612903225806452, "minX": 1.634372822E12, "maxY": 45.33333333333334, "series": [{"data": [[1.6343728226E12, 25.88135593220339], [1.6343728221E12, 24.2156862745098], [1.6343728229E12, 26.877551020408156], [1.6343728223E12, 31.39285714285714], [1.6343728228E12, 27.674999999999994], [1.6343728231E12, 34.86842105263159], [1.634372823E12, 21.312500000000004], [1.6343728225E12, 22.29032258064516], [1.634372822E12, 29.0625], [1.6343728224E12, 20.612903225806452], [1.6343728227E12, 45.33333333333334], [1.6343728222E12, 25.2]], "isOverall": false, "label": "Create Order", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1.6343728231E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 20.2258064516129, "minX": 1.634372822E12, "maxY": 44.00000000000001, "series": [{"data": [[1.6343728226E12, 25.338983050847457], [1.6343728221E12, 23.98039215686275], [1.6343728229E12, 26.224489795918362], [1.6343728223E12, 27.35714285714285], [1.6343728228E12, 27.149999999999995], [1.6343728231E12, 34.10526315789475], [1.634372823E12, 21.03125], [1.6343728225E12, 21.7741935483871], [1.634372822E12, 28.812499999999996], [1.6343728224E12, 20.2258064516129], [1.6343728227E12, 44.00000000000001], [1.6343728222E12, 24.400000000000002]], "isOverall": false, "label": "Create Order", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1.6343728231E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.5918367346938778, "minX": 1.634372822E12, "maxY": 9.868421052631577, "series": [{"data": [[1.6343728226E12, 0.8983050847457631], [1.6343728221E12, 0.6078431372549018], [1.6343728229E12, 0.5918367346938778], [1.6343728223E12, 1.0], [1.6343728228E12, 0.9750000000000002], [1.6343728231E12, 9.868421052631577], [1.634372823E12, 1.28125], [1.6343728225E12, 1.0322580645161297], [1.634372822E12, 0.9375], [1.6343728224E12, 1.1290322580645165], [1.6343728227E12, 0.9285714285714286], [1.6343728222E12, 0.7999999999999999]], "isOverall": false, "label": "Create Order", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1.6343728231E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 15.0, "minX": 1.634372822E12, "maxY": 74.0, "series": [{"data": [[1.6343728226E12, 36.0], [1.6343728221E12, 31.0], [1.6343728229E12, 46.0], [1.6343728223E12, 74.0], [1.6343728228E12, 35.0], [1.6343728231E12, 57.0], [1.634372823E12, 27.0], [1.6343728225E12, 29.0], [1.634372822E12, 33.0], [1.6343728224E12, 40.0], [1.6343728227E12, 66.0], [1.6343728222E12, 31.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6343728226E12, 31.0], [1.6343728221E12, 28.0], [1.6343728229E12, 41.0], [1.6343728223E12, 41.0], [1.6343728228E12, 33.9], [1.6343728231E12, 52.1], [1.634372823E12, 25.7], [1.6343728225E12, 26.8], [1.634372822E12, 32.3], [1.6343728224E12, 23.8], [1.6343728227E12, 60.7], [1.6343728222E12, 29.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6343728226E12, 36.0], [1.6343728221E12, 31.0], [1.6343728229E12, 46.0], [1.6343728223E12, 74.0], [1.6343728228E12, 35.0], [1.6343728231E12, 57.0], [1.634372823E12, 27.0], [1.6343728225E12, 29.0], [1.634372822E12, 33.0], [1.6343728224E12, 40.0], [1.6343728227E12, 66.0], [1.6343728222E12, 31.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6343728226E12, 35.0], [1.6343728221E12, 29.799999999999997], [1.6343728229E12, 42.5], [1.6343728223E12, 50.0], [1.6343728228E12, 34.949999999999996], [1.6343728231E12, 54.14999999999999], [1.634372823E12, 27.0], [1.6343728225E12, 28.4], [1.634372822E12, 33.0], [1.6343728224E12, 30.399999999999977], [1.6343728227E12, 63.7], [1.6343728222E12, 29.199999999999996]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6343728226E12, 19.0], [1.6343728221E12, 18.0], [1.6343728229E12, 17.0], [1.6343728223E12, 18.0], [1.6343728228E12, 23.0], [1.6343728231E12, 18.0], [1.634372823E12, 17.0], [1.6343728225E12, 15.0], [1.634372822E12, 24.0], [1.6343728224E12, 15.0], [1.6343728227E12, 15.0], [1.6343728222E12, 20.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6343728226E12, 25.0], [1.6343728221E12, 24.0], [1.6343728229E12, 26.0], [1.6343728223E12, 29.0], [1.6343728228E12, 27.0], [1.6343728231E12, 34.5], [1.634372823E12, 21.5], [1.6343728225E12, 23.0], [1.634372822E12, 29.0], [1.6343728224E12, 20.0], [1.6343728227E12, 52.5], [1.6343728222E12, 25.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 100, "maxX": 1.6343728231E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 24.0, "minX": 70.0, "maxY": 26.0, "series": [{"data": [[70.0, 24.0], [430.0, 26.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 430.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 24.0, "minX": 70.0, "maxY": 25.0, "series": [{"data": [[70.0, 24.0], [430.0, 25.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 430.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 290.0, "minX": 1.634372822E12, "maxY": 630.0, "series": [{"data": [[1.6343728226E12, 500.0], [1.6343728221E12, 500.0], [1.6343728229E12, 370.0], [1.6343728223E12, 400.0], [1.6343728228E12, 500.0], [1.6343728231E12, 290.0], [1.634372823E12, 340.0], [1.6343728225E12, 340.0], [1.634372822E12, 290.0], [1.6343728224E12, 370.0], [1.6343728227E12, 470.0], [1.6343728222E12, 630.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 100, "maxX": 1.6343728231E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 160.0, "minX": 1.634372822E12, "maxY": 590.0, "series": [{"data": [[1.6343728226E12, 590.0], [1.6343728221E12, 510.0], [1.6343728229E12, 490.0], [1.6343728223E12, 560.0], [1.6343728228E12, 400.0], [1.6343728231E12, 380.0], [1.634372823E12, 320.0], [1.6343728225E12, 310.0], [1.634372822E12, 160.0], [1.6343728224E12, 310.0], [1.6343728227E12, 420.0], [1.6343728222E12, 550.0]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 100, "maxX": 1.6343728231E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 160.0, "minX": 1.634372822E12, "maxY": 590.0, "series": [{"data": [[1.6343728226E12, 590.0], [1.6343728221E12, 510.0], [1.6343728229E12, 490.0], [1.6343728223E12, 560.0], [1.6343728228E12, 400.0], [1.6343728231E12, 380.0], [1.634372823E12, 320.0], [1.6343728225E12, 310.0], [1.634372822E12, 160.0], [1.6343728224E12, 310.0], [1.6343728227E12, 420.0], [1.6343728222E12, 550.0]], "isOverall": false, "label": "Create Order-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1.6343728231E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 160.0, "minX": 1.634372822E12, "maxY": 590.0, "series": [{"data": [[1.6343728226E12, 590.0], [1.6343728221E12, 510.0], [1.6343728229E12, 490.0], [1.6343728223E12, 560.0], [1.6343728228E12, 400.0], [1.6343728231E12, 380.0], [1.634372823E12, 320.0], [1.6343728225E12, 310.0], [1.634372822E12, 160.0], [1.6343728224E12, 310.0], [1.6343728227E12, 420.0], [1.6343728222E12, 550.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1.6343728231E12, "title": "Total Transactions Per Second"}},
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

