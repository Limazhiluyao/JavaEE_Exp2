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
        data: {"result": {"minY": 16.0, "minX": 0.0, "maxY": 194.0, "series": [{"data": [[0.0, 16.0], [0.1, 17.0], [0.2, 17.0], [0.3, 17.0], [0.4, 17.0], [0.5, 18.0], [0.6, 18.0], [0.7, 18.0], [0.8, 18.0], [0.9, 18.0], [1.0, 18.0], [1.1, 18.0], [1.2, 18.0], [1.3, 18.0], [1.4, 18.0], [1.5, 18.0], [1.6, 18.0], [1.7, 18.0], [1.8, 19.0], [1.9, 19.0], [2.0, 19.0], [2.1, 19.0], [2.2, 19.0], [2.3, 19.0], [2.4, 19.0], [2.5, 19.0], [2.6, 19.0], [2.7, 19.0], [2.8, 19.0], [2.9, 19.0], [3.0, 19.0], [3.1, 20.0], [3.2, 20.0], [3.3, 20.0], [3.4, 20.0], [3.5, 20.0], [3.6, 20.0], [3.7, 20.0], [3.8, 20.0], [3.9, 20.0], [4.0, 20.0], [4.1, 20.0], [4.2, 20.0], [4.3, 20.0], [4.4, 20.0], [4.5, 20.0], [4.6, 20.0], [4.7, 20.0], [4.8, 20.0], [4.9, 20.0], [5.0, 20.0], [5.1, 20.0], [5.2, 21.0], [5.3, 21.0], [5.4, 21.0], [5.5, 21.0], [5.6, 21.0], [5.7, 21.0], [5.8, 21.0], [5.9, 21.0], [6.0, 21.0], [6.1, 21.0], [6.2, 21.0], [6.3, 21.0], [6.4, 21.0], [6.5, 21.0], [6.6, 21.0], [6.7, 21.0], [6.8, 21.0], [6.9, 21.0], [7.0, 21.0], [7.1, 21.0], [7.2, 21.0], [7.3, 21.0], [7.4, 21.0], [7.5, 21.0], [7.6, 21.0], [7.7, 21.0], [7.8, 21.0], [7.9, 22.0], [8.0, 22.0], [8.1, 22.0], [8.2, 22.0], [8.3, 22.0], [8.4, 22.0], [8.5, 22.0], [8.6, 22.0], [8.7, 22.0], [8.8, 22.0], [8.9, 22.0], [9.0, 22.0], [9.1, 22.0], [9.2, 22.0], [9.3, 22.0], [9.4, 22.0], [9.5, 22.0], [9.6, 22.0], [9.7, 22.0], [9.8, 22.0], [9.9, 22.0], [10.0, 22.0], [10.1, 22.0], [10.2, 22.0], [10.3, 22.0], [10.4, 22.0], [10.5, 22.0], [10.6, 22.0], [10.7, 22.0], [10.8, 22.0], [10.9, 22.0], [11.0, 22.0], [11.1, 22.0], [11.2, 22.0], [11.3, 22.0], [11.4, 22.0], [11.5, 22.0], [11.6, 22.0], [11.7, 22.0], [11.8, 23.0], [11.9, 23.0], [12.0, 23.0], [12.1, 23.0], [12.2, 23.0], [12.3, 23.0], [12.4, 23.0], [12.5, 23.0], [12.6, 23.0], [12.7, 23.0], [12.8, 23.0], [12.9, 23.0], [13.0, 23.0], [13.1, 23.0], [13.2, 23.0], [13.3, 23.0], [13.4, 23.0], [13.5, 23.0], [13.6, 23.0], [13.7, 23.0], [13.8, 23.0], [13.9, 23.0], [14.0, 23.0], [14.1, 23.0], [14.2, 23.0], [14.3, 23.0], [14.4, 23.0], [14.5, 23.0], [14.6, 23.0], [14.7, 23.0], [14.8, 23.0], [14.9, 23.0], [15.0, 23.0], [15.1, 23.0], [15.2, 23.0], [15.3, 23.0], [15.4, 23.0], [15.5, 23.0], [15.6, 23.0], [15.7, 23.0], [15.8, 23.0], [15.9, 23.0], [16.0, 23.0], [16.1, 24.0], [16.2, 24.0], [16.3, 24.0], [16.4, 24.0], [16.5, 24.0], [16.6, 24.0], [16.7, 24.0], [16.8, 24.0], [16.9, 24.0], [17.0, 24.0], [17.1, 24.0], [17.2, 24.0], [17.3, 24.0], [17.4, 24.0], [17.5, 24.0], [17.6, 24.0], [17.7, 24.0], [17.8, 24.0], [17.9, 24.0], [18.0, 24.0], [18.1, 24.0], [18.2, 24.0], [18.3, 24.0], [18.4, 24.0], [18.5, 24.0], [18.6, 24.0], [18.7, 24.0], [18.8, 24.0], [18.9, 24.0], [19.0, 24.0], [19.1, 24.0], [19.2, 24.0], [19.3, 24.0], [19.4, 24.0], [19.5, 24.0], [19.6, 24.0], [19.7, 24.0], [19.8, 24.0], [19.9, 24.0], [20.0, 24.0], [20.1, 24.0], [20.2, 24.0], [20.3, 24.0], [20.4, 24.0], [20.5, 24.0], [20.6, 24.0], [20.7, 24.0], [20.8, 24.0], [20.9, 24.0], [21.0, 25.0], [21.1, 25.0], [21.2, 25.0], [21.3, 25.0], [21.4, 25.0], [21.5, 25.0], [21.6, 25.0], [21.7, 25.0], [21.8, 25.0], [21.9, 25.0], [22.0, 25.0], [22.1, 25.0], [22.2, 25.0], [22.3, 25.0], [22.4, 25.0], [22.5, 25.0], [22.6, 25.0], [22.7, 25.0], [22.8, 25.0], [22.9, 25.0], [23.0, 25.0], [23.1, 25.0], [23.2, 25.0], [23.3, 25.0], [23.4, 25.0], [23.5, 25.0], [23.6, 25.0], [23.7, 25.0], [23.8, 25.0], [23.9, 25.0], [24.0, 25.0], [24.1, 25.0], [24.2, 25.0], [24.3, 25.0], [24.4, 25.0], [24.5, 25.0], [24.6, 25.0], [24.7, 25.0], [24.8, 25.0], [24.9, 25.0], [25.0, 25.0], [25.1, 25.0], [25.2, 25.0], [25.3, 25.0], [25.4, 25.0], [25.5, 25.0], [25.6, 25.0], [25.7, 25.0], [25.8, 25.0], [25.9, 25.0], [26.0, 25.0], [26.1, 26.0], [26.2, 26.0], [26.3, 26.0], [26.4, 26.0], [26.5, 26.0], [26.6, 26.0], [26.7, 26.0], [26.8, 26.0], [26.9, 26.0], [27.0, 26.0], [27.1, 26.0], [27.2, 26.0], [27.3, 26.0], [27.4, 26.0], [27.5, 26.0], [27.6, 26.0], [27.7, 26.0], [27.8, 26.0], [27.9, 26.0], [28.0, 26.0], [28.1, 26.0], [28.2, 26.0], [28.3, 26.0], [28.4, 26.0], [28.5, 26.0], [28.6, 26.0], [28.7, 26.0], [28.8, 26.0], [28.9, 26.0], [29.0, 26.0], [29.1, 26.0], [29.2, 26.0], [29.3, 26.0], [29.4, 26.0], [29.5, 26.0], [29.6, 26.0], [29.7, 26.0], [29.8, 26.0], [29.9, 26.0], [30.0, 26.0], [30.1, 26.0], [30.2, 26.0], [30.3, 26.0], [30.4, 26.0], [30.5, 26.0], [30.6, 26.0], [30.7, 26.0], [30.8, 26.0], [30.9, 26.0], [31.0, 26.0], [31.1, 26.0], [31.2, 26.0], [31.3, 26.0], [31.4, 26.0], [31.5, 26.0], [31.6, 26.0], [31.7, 26.0], [31.8, 27.0], [31.9, 27.0], [32.0, 27.0], [32.1, 27.0], [32.2, 27.0], [32.3, 27.0], [32.4, 27.0], [32.5, 27.0], [32.6, 27.0], [32.7, 27.0], [32.8, 27.0], [32.9, 27.0], [33.0, 27.0], [33.1, 27.0], [33.2, 27.0], [33.3, 27.0], [33.4, 27.0], [33.5, 27.0], [33.6, 27.0], [33.7, 27.0], [33.8, 27.0], [33.9, 27.0], [34.0, 27.0], [34.1, 27.0], [34.2, 27.0], [34.3, 27.0], [34.4, 27.0], [34.5, 27.0], [34.6, 27.0], [34.7, 27.0], [34.8, 27.0], [34.9, 27.0], [35.0, 27.0], [35.1, 27.0], [35.2, 27.0], [35.3, 27.0], [35.4, 27.0], [35.5, 27.0], [35.6, 27.0], [35.7, 27.0], [35.8, 27.0], [35.9, 27.0], [36.0, 27.0], [36.1, 27.0], [36.2, 27.0], [36.3, 27.0], [36.4, 28.0], [36.5, 28.0], [36.6, 28.0], [36.7, 28.0], [36.8, 28.0], [36.9, 28.0], [37.0, 28.0], [37.1, 28.0], [37.2, 28.0], [37.3, 28.0], [37.4, 28.0], [37.5, 28.0], [37.6, 28.0], [37.7, 28.0], [37.8, 28.0], [37.9, 28.0], [38.0, 28.0], [38.1, 28.0], [38.2, 28.0], [38.3, 28.0], [38.4, 28.0], [38.5, 28.0], [38.6, 28.0], [38.7, 28.0], [38.8, 28.0], [38.9, 28.0], [39.0, 28.0], [39.1, 28.0], [39.2, 28.0], [39.3, 28.0], [39.4, 28.0], [39.5, 28.0], [39.6, 28.0], [39.7, 28.0], [39.8, 28.0], [39.9, 28.0], [40.0, 28.0], [40.1, 28.0], [40.2, 28.0], [40.3, 28.0], [40.4, 28.0], [40.5, 28.0], [40.6, 28.0], [40.7, 29.0], [40.8, 29.0], [40.9, 29.0], [41.0, 29.0], [41.1, 29.0], [41.2, 29.0], [41.3, 29.0], [41.4, 29.0], [41.5, 29.0], [41.6, 29.0], [41.7, 29.0], [41.8, 29.0], [41.9, 29.0], [42.0, 29.0], [42.1, 29.0], [42.2, 29.0], [42.3, 29.0], [42.4, 29.0], [42.5, 29.0], [42.6, 29.0], [42.7, 29.0], [42.8, 29.0], [42.9, 29.0], [43.0, 29.0], [43.1, 29.0], [43.2, 29.0], [43.3, 29.0], [43.4, 29.0], [43.5, 29.0], [43.6, 29.0], [43.7, 29.0], [43.8, 29.0], [43.9, 29.0], [44.0, 29.0], [44.1, 29.0], [44.2, 29.0], [44.3, 29.0], [44.4, 29.0], [44.5, 29.0], [44.6, 29.0], [44.7, 29.0], [44.8, 29.0], [44.9, 29.0], [45.0, 30.0], [45.1, 30.0], [45.2, 30.0], [45.3, 30.0], [45.4, 30.0], [45.5, 30.0], [45.6, 30.0], [45.7, 30.0], [45.8, 30.0], [45.9, 30.0], [46.0, 30.0], [46.1, 30.0], [46.2, 30.0], [46.3, 30.0], [46.4, 30.0], [46.5, 30.0], [46.6, 30.0], [46.7, 30.0], [46.8, 30.0], [46.9, 30.0], [47.0, 30.0], [47.1, 30.0], [47.2, 30.0], [47.3, 30.0], [47.4, 30.0], [47.5, 30.0], [47.6, 30.0], [47.7, 30.0], [47.8, 30.0], [47.9, 30.0], [48.0, 30.0], [48.1, 30.0], [48.2, 30.0], [48.3, 30.0], [48.4, 30.0], [48.5, 30.0], [48.6, 30.0], [48.7, 30.0], [48.8, 30.0], [48.9, 30.0], [49.0, 30.0], [49.1, 30.0], [49.2, 30.0], [49.3, 30.0], [49.4, 30.0], [49.5, 31.0], [49.6, 31.0], [49.7, 31.0], [49.8, 31.0], [49.9, 31.0], [50.0, 31.0], [50.1, 31.0], [50.2, 31.0], [50.3, 31.0], [50.4, 31.0], [50.5, 31.0], [50.6, 31.0], [50.7, 31.0], [50.8, 31.0], [50.9, 31.0], [51.0, 31.0], [51.1, 31.0], [51.2, 31.0], [51.3, 31.0], [51.4, 31.0], [51.5, 31.0], [51.6, 31.0], [51.7, 31.0], [51.8, 31.0], [51.9, 31.0], [52.0, 31.0], [52.1, 31.0], [52.2, 31.0], [52.3, 31.0], [52.4, 31.0], [52.5, 31.0], [52.6, 31.0], [52.7, 31.0], [52.8, 31.0], [52.9, 32.0], [53.0, 32.0], [53.1, 32.0], [53.2, 32.0], [53.3, 32.0], [53.4, 32.0], [53.5, 32.0], [53.6, 32.0], [53.7, 32.0], [53.8, 32.0], [53.9, 32.0], [54.0, 32.0], [54.1, 32.0], [54.2, 32.0], [54.3, 32.0], [54.4, 32.0], [54.5, 32.0], [54.6, 32.0], [54.7, 32.0], [54.8, 32.0], [54.9, 32.0], [55.0, 32.0], [55.1, 32.0], [55.2, 32.0], [55.3, 32.0], [55.4, 32.0], [55.5, 32.0], [55.6, 32.0], [55.7, 32.0], [55.8, 32.0], [55.9, 32.0], [56.0, 32.0], [56.1, 32.0], [56.2, 32.0], [56.3, 32.0], [56.4, 33.0], [56.5, 33.0], [56.6, 33.0], [56.7, 33.0], [56.8, 33.0], [56.9, 33.0], [57.0, 33.0], [57.1, 33.0], [57.2, 33.0], [57.3, 33.0], [57.4, 33.0], [57.5, 33.0], [57.6, 33.0], [57.7, 33.0], [57.8, 33.0], [57.9, 33.0], [58.0, 33.0], [58.1, 33.0], [58.2, 33.0], [58.3, 33.0], [58.4, 33.0], [58.5, 33.0], [58.6, 33.0], [58.7, 33.0], [58.8, 33.0], [58.9, 33.0], [59.0, 33.0], [59.1, 33.0], [59.2, 34.0], [59.3, 34.0], [59.4, 34.0], [59.5, 34.0], [59.6, 34.0], [59.7, 34.0], [59.8, 34.0], [59.9, 34.0], [60.0, 34.0], [60.1, 34.0], [60.2, 34.0], [60.3, 34.0], [60.4, 34.0], [60.5, 34.0], [60.6, 34.0], [60.7, 34.0], [60.8, 34.0], [60.9, 34.0], [61.0, 34.0], [61.1, 34.0], [61.2, 34.0], [61.3, 34.0], [61.4, 35.0], [61.5, 35.0], [61.6, 35.0], [61.7, 35.0], [61.8, 35.0], [61.9, 35.0], [62.0, 35.0], [62.1, 35.0], [62.2, 35.0], [62.3, 35.0], [62.4, 35.0], [62.5, 35.0], [62.6, 35.0], [62.7, 35.0], [62.8, 35.0], [62.9, 35.0], [63.0, 35.0], [63.1, 35.0], [63.2, 35.0], [63.3, 35.0], [63.4, 35.0], [63.5, 35.0], [63.6, 35.0], [63.7, 36.0], [63.8, 36.0], [63.9, 36.0], [64.0, 36.0], [64.1, 36.0], [64.2, 36.0], [64.3, 36.0], [64.4, 36.0], [64.5, 36.0], [64.6, 36.0], [64.7, 36.0], [64.8, 36.0], [64.9, 37.0], [65.0, 37.0], [65.1, 37.0], [65.2, 37.0], [65.3, 37.0], [65.4, 37.0], [65.5, 37.0], [65.6, 37.0], [65.7, 37.0], [65.8, 37.0], [65.9, 37.0], [66.0, 37.0], [66.1, 37.0], [66.2, 38.0], [66.3, 38.0], [66.4, 38.0], [66.5, 38.0], [66.6, 38.0], [66.7, 38.0], [66.8, 38.0], [66.9, 38.0], [67.0, 38.0], [67.1, 38.0], [67.2, 38.0], [67.3, 39.0], [67.4, 39.0], [67.5, 39.0], [67.6, 39.0], [67.7, 39.0], [67.8, 39.0], [67.9, 39.0], [68.0, 39.0], [68.1, 39.0], [68.2, 39.0], [68.3, 39.0], [68.4, 39.0], [68.5, 39.0], [68.6, 39.0], [68.7, 40.0], [68.8, 40.0], [68.9, 40.0], [69.0, 40.0], [69.1, 40.0], [69.2, 40.0], [69.3, 40.0], [69.4, 40.0], [69.5, 40.0], [69.6, 40.0], [69.7, 41.0], [69.8, 41.0], [69.9, 41.0], [70.0, 41.0], [70.1, 41.0], [70.2, 41.0], [70.3, 41.0], [70.4, 41.0], [70.5, 41.0], [70.6, 41.0], [70.7, 41.0], [70.8, 41.0], [70.9, 41.0], [71.0, 42.0], [71.1, 42.0], [71.2, 42.0], [71.3, 42.0], [71.4, 42.0], [71.5, 42.0], [71.6, 42.0], [71.7, 42.0], [71.8, 42.0], [71.9, 42.0], [72.0, 42.0], [72.1, 42.0], [72.2, 43.0], [72.3, 43.0], [72.4, 43.0], [72.5, 43.0], [72.6, 43.0], [72.7, 44.0], [72.8, 44.0], [72.9, 44.0], [73.0, 44.0], [73.1, 44.0], [73.2, 45.0], [73.3, 45.0], [73.4, 45.0], [73.5, 45.0], [73.6, 45.0], [73.7, 45.0], [73.8, 45.0], [73.9, 45.0], [74.0, 45.0], [74.1, 46.0], [74.2, 46.0], [74.3, 46.0], [74.4, 46.0], [74.5, 46.0], [74.6, 46.0], [74.7, 46.0], [74.8, 46.0], [74.9, 46.0], [75.0, 47.0], [75.1, 47.0], [75.2, 47.0], [75.3, 47.0], [75.4, 47.0], [75.5, 47.0], [75.6, 47.0], [75.7, 48.0], [75.8, 48.0], [75.9, 48.0], [76.0, 48.0], [76.1, 48.0], [76.2, 49.0], [76.3, 49.0], [76.4, 49.0], [76.5, 49.0], [76.6, 50.0], [76.7, 50.0], [76.8, 50.0], [76.9, 50.0], [77.0, 50.0], [77.1, 50.0], [77.2, 51.0], [77.3, 51.0], [77.4, 51.0], [77.5, 51.0], [77.6, 52.0], [77.7, 52.0], [77.8, 52.0], [77.9, 52.0], [78.0, 52.0], [78.1, 53.0], [78.2, 54.0], [78.3, 54.0], [78.4, 54.0], [78.5, 54.0], [78.6, 54.0], [78.7, 54.0], [78.8, 54.0], [78.9, 54.0], [79.0, 55.0], [79.1, 55.0], [79.2, 56.0], [79.3, 56.0], [79.4, 56.0], [79.5, 56.0], [79.6, 56.0], [79.7, 57.0], [79.8, 57.0], [79.9, 58.0], [80.0, 58.0], [80.1, 58.0], [80.2, 59.0], [80.3, 59.0], [80.4, 59.0], [80.5, 59.0], [80.6, 59.0], [80.7, 60.0], [80.8, 60.0], [80.9, 61.0], [81.0, 61.0], [81.1, 61.0], [81.2, 61.0], [81.3, 62.0], [81.4, 62.0], [81.5, 62.0], [81.6, 62.0], [81.7, 63.0], [81.8, 63.0], [81.9, 63.0], [82.0, 63.0], [82.1, 64.0], [82.2, 64.0], [82.3, 64.0], [82.4, 65.0], [82.5, 65.0], [82.6, 66.0], [82.7, 66.0], [82.8, 66.0], [82.9, 66.0], [83.0, 67.0], [83.1, 67.0], [83.2, 67.0], [83.3, 67.0], [83.4, 68.0], [83.5, 68.0], [83.6, 68.0], [83.7, 69.0], [83.8, 69.0], [83.9, 69.0], [84.0, 70.0], [84.1, 70.0], [84.2, 70.0], [84.3, 70.0], [84.4, 70.0], [84.5, 71.0], [84.6, 71.0], [84.7, 72.0], [84.8, 72.0], [84.9, 73.0], [85.0, 73.0], [85.1, 73.0], [85.2, 73.0], [85.3, 74.0], [85.4, 74.0], [85.5, 75.0], [85.6, 75.0], [85.7, 76.0], [85.8, 76.0], [85.9, 77.0], [86.0, 77.0], [86.1, 77.0], [86.2, 78.0], [86.3, 79.0], [86.4, 79.0], [86.5, 80.0], [86.6, 80.0], [86.7, 80.0], [86.8, 81.0], [86.9, 81.0], [87.0, 81.0], [87.1, 82.0], [87.2, 83.0], [87.3, 83.0], [87.4, 84.0], [87.5, 85.0], [87.6, 85.0], [87.7, 86.0], [87.8, 87.0], [87.9, 88.0], [88.0, 88.0], [88.1, 89.0], [88.2, 89.0], [88.3, 89.0], [88.4, 90.0], [88.5, 90.0], [88.6, 90.0], [88.7, 91.0], [88.8, 92.0], [88.9, 92.0], [89.0, 92.0], [89.1, 92.0], [89.2, 93.0], [89.3, 94.0], [89.4, 95.0], [89.5, 96.0], [89.6, 96.0], [89.7, 99.0], [89.8, 99.0], [89.9, 99.0], [90.0, 100.0], [90.1, 100.0], [90.2, 100.0], [90.3, 101.0], [90.4, 102.0], [90.5, 102.0], [90.6, 103.0], [90.7, 103.0], [90.8, 104.0], [90.9, 104.0], [91.0, 104.0], [91.1, 104.0], [91.2, 105.0], [91.3, 106.0], [91.4, 107.0], [91.5, 108.0], [91.6, 109.0], [91.7, 110.0], [91.8, 111.0], [91.9, 112.0], [92.0, 112.0], [92.1, 112.0], [92.2, 113.0], [92.3, 114.0], [92.4, 114.0], [92.5, 114.0], [92.6, 114.0], [92.7, 115.0], [92.8, 116.0], [92.9, 116.0], [93.0, 117.0], [93.1, 117.0], [93.2, 117.0], [93.3, 118.0], [93.4, 118.0], [93.5, 118.0], [93.6, 119.0], [93.7, 119.0], [93.8, 120.0], [93.9, 120.0], [94.0, 121.0], [94.1, 122.0], [94.2, 122.0], [94.3, 122.0], [94.4, 122.0], [94.5, 123.0], [94.6, 123.0], [94.7, 124.0], [94.8, 125.0], [94.9, 126.0], [95.0, 126.0], [95.1, 126.0], [95.2, 127.0], [95.3, 128.0], [95.4, 129.0], [95.5, 129.0], [95.6, 130.0], [95.7, 130.0], [95.8, 131.0], [95.9, 131.0], [96.0, 132.0], [96.1, 132.0], [96.2, 133.0], [96.3, 135.0], [96.4, 136.0], [96.5, 137.0], [96.6, 137.0], [96.7, 138.0], [96.8, 138.0], [96.9, 139.0], [97.0, 140.0], [97.1, 141.0], [97.2, 142.0], [97.3, 142.0], [97.4, 142.0], [97.5, 144.0], [97.6, 146.0], [97.7, 147.0], [97.8, 150.0], [97.9, 153.0], [98.0, 155.0], [98.1, 156.0], [98.2, 158.0], [98.3, 158.0], [98.4, 159.0], [98.5, 160.0], [98.6, 163.0], [98.7, 163.0], [98.8, 164.0], [98.9, 164.0], [99.0, 165.0], [99.1, 169.0], [99.2, 169.0], [99.3, 170.0], [99.4, 171.0], [99.5, 173.0], [99.6, 174.0], [99.7, 176.0], [99.8, 176.0], [99.9, 177.0], [100.0, 194.0]], "isOverall": false, "label": "Create Order", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 201.0, "minX": 0.0, "maxY": 1799.0, "series": [{"data": [[0.0, 1799.0], [100.0, 201.0]], "isOverall": false, "label": "Create Order", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 9.885714285714288, "minX": 1.6343729918E12, "maxY": 291.388625592417, "series": [{"data": [[1.6343729939E12, 17.104166666666668], [1.6343729938E12, 18.743902439024396], [1.6343729928E12, 34.086206896551694], [1.6343729918E12, 245.9351851851852], [1.634372994E12, 19.215384615384618], [1.634372993E12, 30.810000000000002], [1.6343729929E12, 31.956043956043953], [1.6343729919E12, 291.388625592417], [1.6343729936E12, 14.375000000000004], [1.6343729926E12, 9.885714285714288], [1.6343729937E12, 11.76470588235294], [1.6343729927E12, 35.53191489361703], [1.6343729934E12, 28.708737864077676], [1.6343729933E12, 33.684782608695656], [1.6343729923E12, 27.79411764705882], [1.6343729935E12, 13.59090909090909], [1.6343729925E12, 32.69523809523811], [1.6343729924E12, 22.375], [1.6343729931E12, 35.19387755102041], [1.6343729921E12, 215.1858407079646], [1.634372992E12, 244.82222222222225], [1.6343729941E12, 24.876712328767127], [1.6343729922E12, 21.380952380952376], [1.6343729942E12, 16.518518518518523], [1.6343729932E12, 32.91836734693878]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 100, "maxX": 1.6343729942E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 22.0, "minX": 1.0, "maxY": 177.0, "series": [{"data": [[2.0, 24.666666666666668], [3.0, 24.0], [4.0, 25.333333333333332], [5.0, 23.5], [6.0, 23.666666666666668], [7.0, 23.444444444444443], [8.0, 56.6], [9.0, 23.95], [10.0, 22.366666666666664], [11.0, 24.899999999999995], [12.0, 23.360000000000003], [13.0, 23.6304347826087], [14.0, 26.52777777777778], [15.0, 26.91891891891892], [16.0, 27.374999999999993], [17.0, 36.51515151515151], [18.0, 26.999999999999996], [19.0, 27.411764705882344], [20.0, 28.547619047619044], [21.0, 28.19512195121951], [22.0, 29.307692307692303], [23.0, 32.26829268292684], [24.0, 33.18749999999999], [25.0, 33.388888888888886], [26.0, 31.730769230769244], [27.0, 34.67391304347825], [28.0, 33.80392156862746], [29.0, 32.47916666666664], [30.0, 34.42857142857142], [31.0, 34.18750000000001], [33.0, 32.55172413793103], [32.0, 34.52830188679247], [35.0, 31.06779661016948], [34.0, 32.490566037735846], [36.0, 33.374999999999986], [37.0, 32.97297297297297], [39.0, 34.484848484848484], [38.0, 32.825], [41.0, 33.84000000000001], [40.0, 32.375], [43.0, 35.71428571428571], [42.0, 35.43478260869565], [45.0, 33.733333333333334], [44.0, 33.75], [46.0, 36.5], [47.0, 34.99999999999999], [49.0, 58.0], [48.0, 48.5], [51.0, 51.333333333333336], [50.0, 40.8], [53.0, 51.0], [52.0, 52.75], [55.0, 70.5], [54.0, 35.75], [57.0, 104.0], [56.0, 101.0], [59.0, 70.0], [58.0, 77.0], [61.0, 72.0], [60.0, 99.0], [63.0, 118.0], [62.0, 89.0], [67.0, 131.0], [66.0, 104.0], [65.0, 127.0], [64.0, 116.0], [71.0, 129.0], [70.0, 130.0], [69.0, 137.0], [68.0, 114.0], [75.0, 122.0], [74.0, 81.5], [73.0, 126.0], [143.0, 62.0], [206.0, 117.0], [212.0, 40.93333333333334], [220.0, 37.0], [233.0, 50.71428571428571], [247.0, 130.57894736842107], [246.0, 140.00000000000003], [244.0, 132.4], [243.0, 143.0], [242.0, 119.0], [241.0, 118.5], [250.0, 177.0], [249.0, 143.85714285714286], [248.0, 142.01923076923083], [270.0, 45.5], [269.0, 47.75], [265.0, 66.0], [285.0, 83.0], [277.0, 88.33333333333334], [279.0, 97.22000000000003], [286.0, 73.0], [284.0, 82.0], [275.0, 69.0], [274.0, 61.0], [283.0, 102.66666666666667], [282.0, 70.0], [280.0, 112.48717948717947], [276.0, 75.82352941176472], [290.0, 77.25], [291.0, 75.08333333333333], [292.0, 79.53846153846153], [293.0, 77.3], [294.0, 88.0], [295.0, 51.090909090909086], [302.0, 45.375], [303.0, 50.166666666666664], [318.0, 34.0], [317.0, 31.666666666666668], [313.0, 65.83333333333331], [309.0, 40.0], [311.0, 37.6], [330.0, 24.333333333333332], [329.0, 25.0], [324.0, 27.0], [323.0, 24.166666666666668], [320.0, 65.37499999999999], [344.0, 32.0], [342.0, 49.5], [337.0, 33.0], [341.0, 31.25], [339.0, 70.0], [338.0, 72.55555555555556], [336.0, 71.0], [1.0, 22.0]], "isOverall": false, "label": "Create Order", "isController": false}, {"data": [[82.22649999999982, 44.841500000000075]], "isOverall": false, "label": "Create Order-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 344.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 17280.0, "minX": 1.6343729918E12, "maxY": 888310.0, "series": [{"data": [[1.6343729939E12, 103680.0], [1.6343729938E12, 177120.0], [1.6343729928E12, 250560.0], [1.6343729918E12, 233280.0], [1.634372994E12, 140400.0], [1.634372993E12, 216000.0], [1.6343729929E12, 196560.0], [1.6343729919E12, 455760.0], [1.6343729936E12, 120960.0], [1.6343729926E12, 75600.0], [1.6343729937E12, 110160.0], [1.6343729927E12, 203040.0], [1.6343729934E12, 222480.0], [1.6343729933E12, 198720.0], [1.6343729923E12, 146880.0], [1.6343729935E12, 95040.0], [1.6343729925E12, 226800.0], [1.6343729924E12, 17280.0], [1.6343729931E12, 211680.0], [1.6343729921E12, 244080.0], [1.634372992E12, 97200.0], [1.6343729941E12, 157680.0], [1.6343729922E12, 90720.0], [1.6343729942E12, 116640.0], [1.6343729932E12, 211680.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6343729939E12, 202080.0], [1.6343729938E12, 345220.0], [1.6343729928E12, 488360.0], [1.6343729918E12, 454680.0], [1.634372994E12, 273650.0], [1.634372993E12, 421000.0], [1.6343729929E12, 383110.0], [1.6343729919E12, 888310.0], [1.6343729936E12, 235760.0], [1.6343729926E12, 147350.0], [1.6343729937E12, 214710.0], [1.6343729927E12, 395740.0], [1.6343729934E12, 433630.0], [1.6343729933E12, 387320.0], [1.6343729923E12, 286280.0], [1.6343729935E12, 185240.0], [1.6343729925E12, 442050.0], [1.6343729924E12, 33680.0], [1.6343729931E12, 412580.0], [1.6343729921E12, 475730.0], [1.634372992E12, 189450.0], [1.6343729941E12, 307330.0], [1.6343729922E12, 176820.0], [1.6343729942E12, 227340.0], [1.6343729932E12, 412580.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 100, "maxX": 1.6343729942E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 22.039215686274506, "minX": 1.6343729918E12, "maxY": 138.36111111111106, "series": [{"data": [[1.6343729939E12, 25.1875], [1.6343729938E12, 22.853658536585364], [1.6343729928E12, 29.767241379310338], [1.6343729918E12, 138.36111111111106], [1.634372994E12, 27.015384615384615], [1.634372993E12, 34.739999999999995], [1.6343729929E12, 27.74725274725275], [1.6343729919E12, 79.17535545023699], [1.6343729936E12, 23.267857142857146], [1.6343729926E12, 23.628571428571426], [1.6343729937E12, 22.039215686274506], [1.6343729927E12, 32.23404255319149], [1.6343729934E12, 31.16504854368931], [1.6343729933E12, 28.554347826086964], [1.6343729923E12, 46.44117647058824], [1.6343729935E12, 30.659090909090917], [1.6343729925E12, 61.68571428571426], [1.6343729924E12, 39.5], [1.6343729931E12, 29.13265306122448], [1.6343729921E12, 65.48672566371687], [1.634372992E12, 47.4], [1.6343729941E12, 27.520547945205482], [1.6343729922E12, 42.83333333333333], [1.6343729942E12, 25.611111111111107], [1.6343729932E12, 27.989795918367346]], "isOverall": false, "label": "Create Order", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1.6343729942E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 21.686274509803923, "minX": 1.6343729918E12, "maxY": 121.99074074074075, "series": [{"data": [[1.6343729939E12, 24.41666666666667], [1.6343729938E12, 21.79268292682926], [1.6343729928E12, 28.01724137931034], [1.6343729918E12, 121.99074074074075], [1.634372994E12, 26.061538461538465], [1.634372993E12, 32.96], [1.6343729929E12, 26.05494505494506], [1.6343729919E12, 66.70616113744077], [1.6343729936E12, 22.44642857142857], [1.6343729926E12, 22.999999999999996], [1.6343729937E12, 21.686274509803923], [1.6343729927E12, 30.47872340425532], [1.6343729934E12, 29.417475728155345], [1.6343729933E12, 26.73913043478261], [1.6343729923E12, 44.29411764705882], [1.6343729935E12, 30.04545454545454], [1.6343729925E12, 57.14285714285714], [1.6343729924E12, 38.62499999999999], [1.6343729931E12, 27.500000000000007], [1.6343729921E12, 61.070796460176986], [1.634372992E12, 44.73333333333333], [1.6343729941E12, 26.027397260273972], [1.6343729922E12, 41.42857142857142], [1.6343729942E12, 24.537037037037038], [1.6343729932E12, 26.142857142857153]], "isOverall": false, "label": "Create Order", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1.6343729942E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.3689320388349514, "minX": 1.6343729918E12, "maxY": 2.022222222222222, "series": [{"data": [[1.6343729939E12, 0.5208333333333335], [1.6343729938E12, 0.3780487804878049], [1.6343729928E12, 0.5086206896551725], [1.6343729918E12, 0.5000000000000001], [1.634372994E12, 0.3846153846153845], [1.634372993E12, 0.47000000000000003], [1.6343729929E12, 0.4065934065934066], [1.6343729919E12, 0.4976303317535546], [1.6343729936E12, 0.6607142857142857], [1.6343729926E12, 0.4857142857142857], [1.6343729937E12, 0.803921568627451], [1.6343729927E12, 0.4787234042553192], [1.6343729934E12, 0.3689320388349514], [1.6343729933E12, 0.44565217391304346], [1.6343729923E12, 0.6470588235294117], [1.6343729935E12, 0.5454545454545456], [1.6343729925E12, 0.6000000000000001], [1.6343729924E12, 0.75], [1.6343729931E12, 0.39795918367346944], [1.6343729921E12, 0.513274336283186], [1.634372992E12, 2.022222222222222], [1.6343729941E12, 0.4657534246575343], [1.6343729922E12, 1.0], [1.6343729942E12, 0.6111111111111112], [1.6343729932E12, 0.38775510204081637]], "isOverall": false, "label": "Create Order", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1.6343729942E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 16.0, "minX": 1.6343729918E12, "maxY": 194.0, "series": [{"data": [[1.6343729939E12, 31.0], [1.6343729938E12, 30.0], [1.6343729928E12, 42.0], [1.6343729918E12, 177.0], [1.634372994E12, 35.0], [1.634372993E12, 45.0], [1.6343729929E12, 40.0], [1.6343729919E12, 142.0], [1.6343729936E12, 31.0], [1.6343729926E12, 29.0], [1.6343729937E12, 30.0], [1.6343729927E12, 43.0], [1.6343729934E12, 177.0], [1.6343729933E12, 39.0], [1.6343729923E12, 63.0], [1.6343729935E12, 194.0], [1.6343729925E12, 137.0], [1.6343729924E12, 46.0], [1.6343729931E12, 39.0], [1.6343729921E12, 101.0], [1.634372992E12, 120.0], [1.6343729941E12, 39.0], [1.6343729922E12, 61.0], [1.6343729942E12, 38.0], [1.6343729932E12, 37.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6343729939E12, 30.0], [1.6343729938E12, 26.0], [1.6343729928E12, 36.0], [1.6343729918E12, 170.0], [1.634372994E12, 32.4], [1.634372993E12, 42.0], [1.6343729929E12, 32.0], [1.6343729919E12, 125.80000000000001], [1.6343729936E12, 29.0], [1.6343729926E12, 27.0], [1.6343729937E12, 26.0], [1.6343729927E12, 37.0], [1.6343729934E12, 35.0], [1.6343729933E12, 35.0], [1.6343729923E12, 54.1], [1.6343729935E12, 30.0], [1.6343729925E12, 116.4], [1.6343729924E12, 46.0], [1.6343729931E12, 33.10000000000001], [1.6343729921E12, 78.20000000000002], [1.634372992E12, 52.0], [1.6343729941E12, 35.0], [1.6343729922E12, 48.7], [1.6343729942E12, 32.5], [1.6343729932E12, 32.10000000000001]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6343729939E12, 31.0], [1.6343729938E12, 30.0], [1.6343729928E12, 41.489999999999995], [1.6343729918E12, 176.91], [1.634372994E12, 35.0], [1.634372993E12, 45.0], [1.6343729929E12, 40.0], [1.6343729919E12, 141.0], [1.6343729936E12, 31.0], [1.6343729926E12, 29.0], [1.6343729937E12, 30.0], [1.6343729927E12, 43.0], [1.6343729934E12, 176.88], [1.6343729933E12, 39.0], [1.6343729923E12, 63.0], [1.6343729935E12, 194.0], [1.6343729925E12, 136.64], [1.6343729924E12, 46.0], [1.6343729931E12, 39.0], [1.6343729921E12, 99.6], [1.634372992E12, 120.0], [1.6343729941E12, 39.0], [1.6343729922E12, 61.0], [1.6343729942E12, 38.0], [1.6343729932E12, 37.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6343729939E12, 30.549999999999997], [1.6343729938E12, 27.0], [1.6343729928E12, 37.14999999999999], [1.6343729918E12, 174.1], [1.634372994E12, 33.699999999999996], [1.634372993E12, 42.94999999999999], [1.6343729929E12, 34.0], [1.6343729919E12, 136.0], [1.6343729936E12, 30.15], [1.6343729926E12, 28.199999999999996], [1.6343729937E12, 27.799999999999997], [1.6343729927E12, 39.0], [1.6343729934E12, 39.8], [1.6343729933E12, 36.349999999999994], [1.6343729923E12, 57.64999999999999], [1.6343729935E12, 148.75], [1.6343729925E12, 126.69999999999999], [1.6343729924E12, 46.0], [1.6343729931E12, 35.0], [1.6343729921E12, 82.3], [1.634372992E12, 65.49999999999994], [1.6343729941E12, 36.0], [1.6343729922E12, 52.550000000000004], [1.6343729942E12, 34.25], [1.6343729932E12, 34.05]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6343729939E12, 18.0], [1.6343729938E12, 17.0], [1.6343729928E12, 21.0], [1.6343729918E12, 62.0], [1.634372994E12, 18.0], [1.634372993E12, 24.0], [1.6343729929E12, 21.0], [1.6343729919E12, 22.0], [1.6343729936E12, 17.0], [1.6343729926E12, 19.0], [1.6343729937E12, 16.0], [1.6343729927E12, 24.0], [1.6343729934E12, 18.0], [1.6343729933E12, 19.0], [1.6343729923E12, 31.0], [1.6343729935E12, 17.0], [1.6343729925E12, 18.0], [1.6343729924E12, 32.0], [1.6343729931E12, 20.0], [1.6343729921E12, 45.0], [1.634372992E12, 37.0], [1.6343729941E12, 18.0], [1.6343729922E12, 31.0], [1.6343729942E12, 17.0], [1.6343729932E12, 20.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6343729939E12, 25.0], [1.6343729938E12, 23.0], [1.6343729928E12, 30.0], [1.6343729918E12, 139.0], [1.634372994E12, 27.0], [1.634372993E12, 36.0], [1.6343729929E12, 27.0], [1.6343729919E12, 84.0], [1.6343729936E12, 23.0], [1.6343729926E12, 24.0], [1.6343729937E12, 22.0], [1.6343729927E12, 33.0], [1.6343729934E12, 27.0], [1.6343729933E12, 28.0], [1.6343729923E12, 46.0], [1.6343729935E12, 23.0], [1.6343729925E12, 56.0], [1.6343729924E12, 41.5], [1.6343729931E12, 29.0], [1.6343729921E12, 66.0], [1.634372992E12, 46.0], [1.6343729941E12, 28.0], [1.6343729922E12, 42.0], [1.6343729942E12, 25.0], [1.6343729932E12, 28.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 100, "maxX": 1.6343729942E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 26.0, "minX": 192.0, "maxY": 103.0, "series": [{"data": [[319.0, 103.0], [717.0, 36.0], [772.0, 26.0], [192.0, 27.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 772.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 25.0, "minX": 192.0, "maxY": 85.0, "series": [{"data": [[319.0, 85.0], [717.0, 34.0], [772.0, 25.0], [192.0, 25.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 772.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 330.0, "minX": 1.6343729917E12, "maxY": 1360.0, "series": [{"data": [[1.6343729939E12, 570.0], [1.6343729938E12, 760.0], [1.6343729928E12, 1030.0], [1.6343729918E12, 1310.0], [1.634372994E12, 610.0], [1.634372993E12, 750.0], [1.6343729929E12, 1090.0], [1.6343729919E12, 790.0], [1.6343729936E12, 570.0], [1.6343729926E12, 480.0], [1.6343729917E12, 1360.0], [1.6343729937E12, 460.0], [1.6343729927E12, 1060.0], [1.6343729934E12, 670.0], [1.6343729933E12, 930.0], [1.6343729923E12, 520.0], [1.6343729935E12, 530.0], [1.6343729925E12, 460.0], [1.6343729924E12, 570.0], [1.6343729931E12, 1100.0], [1.6343729921E12, 640.0], [1.634372992E12, 980.0], [1.6343729941E12, 830.0], [1.6343729922E12, 450.0], [1.6343729942E12, 330.0], [1.6343729932E12, 1150.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 100, "maxX": 1.6343729942E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 80.0, "minX": 1.6343729918E12, "maxY": 2110.0, "series": [{"data": [[1.6343729939E12, 480.0], [1.6343729938E12, 820.0], [1.6343729928E12, 1160.0], [1.6343729918E12, 1080.0], [1.634372994E12, 650.0], [1.634372993E12, 1000.0], [1.6343729929E12, 910.0], [1.6343729919E12, 2110.0], [1.6343729936E12, 560.0], [1.6343729926E12, 350.0], [1.6343729937E12, 510.0], [1.6343729927E12, 940.0], [1.6343729934E12, 1030.0], [1.6343729933E12, 920.0], [1.6343729923E12, 680.0], [1.6343729935E12, 440.0], [1.6343729925E12, 1050.0], [1.6343729924E12, 80.0], [1.6343729931E12, 980.0], [1.6343729921E12, 1130.0], [1.634372992E12, 450.0], [1.6343729941E12, 730.0], [1.6343729922E12, 420.0], [1.6343729942E12, 540.0], [1.6343729932E12, 980.0]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 100, "maxX": 1.6343729942E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 80.0, "minX": 1.6343729918E12, "maxY": 2110.0, "series": [{"data": [[1.6343729939E12, 480.0], [1.6343729938E12, 820.0], [1.6343729928E12, 1160.0], [1.6343729918E12, 1080.0], [1.634372994E12, 650.0], [1.634372993E12, 1000.0], [1.6343729929E12, 910.0], [1.6343729919E12, 2110.0], [1.6343729936E12, 560.0], [1.6343729926E12, 350.0], [1.6343729937E12, 510.0], [1.6343729927E12, 940.0], [1.6343729934E12, 1030.0], [1.6343729933E12, 920.0], [1.6343729923E12, 680.0], [1.6343729935E12, 440.0], [1.6343729925E12, 1050.0], [1.6343729924E12, 80.0], [1.6343729931E12, 980.0], [1.6343729921E12, 1130.0], [1.634372992E12, 450.0], [1.6343729941E12, 730.0], [1.6343729922E12, 420.0], [1.6343729942E12, 540.0], [1.6343729932E12, 980.0]], "isOverall": false, "label": "Create Order-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1.6343729942E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 80.0, "minX": 1.6343729918E12, "maxY": 2110.0, "series": [{"data": [[1.6343729939E12, 480.0], [1.6343729938E12, 820.0], [1.6343729928E12, 1160.0], [1.6343729918E12, 1080.0], [1.634372994E12, 650.0], [1.634372993E12, 1000.0], [1.6343729929E12, 910.0], [1.6343729919E12, 2110.0], [1.6343729936E12, 560.0], [1.6343729926E12, 350.0], [1.6343729937E12, 510.0], [1.6343729927E12, 940.0], [1.6343729934E12, 1030.0], [1.6343729933E12, 920.0], [1.6343729923E12, 680.0], [1.6343729935E12, 440.0], [1.6343729925E12, 1050.0], [1.6343729924E12, 80.0], [1.6343729931E12, 980.0], [1.6343729921E12, 1130.0], [1.634372992E12, 450.0], [1.6343729941E12, 730.0], [1.6343729922E12, 420.0], [1.6343729942E12, 540.0], [1.6343729932E12, 980.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1.6343729942E12, "title": "Total Transactions Per Second"}},
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

