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
        data: {"result": {"minY": 17.0, "minX": 0.0, "maxY": 272.0, "series": [{"data": [[0.0, 17.0], [0.1, 17.0], [0.2, 18.0], [0.3, 18.0], [0.4, 18.0], [0.5, 19.0], [0.6, 19.0], [0.7, 19.0], [0.8, 19.0], [0.9, 20.0], [1.0, 20.0], [1.1, 20.0], [1.2, 20.0], [1.3, 20.0], [1.4, 20.0], [1.5, 20.0], [1.6, 20.0], [1.7, 20.0], [1.8, 21.0], [1.9, 21.0], [2.0, 21.0], [2.1, 21.0], [2.2, 21.0], [2.3, 21.0], [2.4, 21.0], [2.5, 21.0], [2.6, 21.0], [2.7, 21.0], [2.8, 21.0], [2.9, 21.0], [3.0, 22.0], [3.1, 22.0], [3.2, 22.0], [3.3, 22.0], [3.4, 22.0], [3.5, 22.0], [3.6, 22.0], [3.7, 22.0], [3.8, 22.0], [3.9, 22.0], [4.0, 22.0], [4.1, 22.0], [4.2, 22.0], [4.3, 22.0], [4.4, 22.0], [4.5, 22.0], [4.6, 22.0], [4.7, 23.0], [4.8, 23.0], [4.9, 23.0], [5.0, 23.0], [5.1, 23.0], [5.2, 23.0], [5.3, 23.0], [5.4, 23.0], [5.5, 23.0], [5.6, 23.0], [5.7, 23.0], [5.8, 23.0], [5.9, 23.0], [6.0, 23.0], [6.1, 23.0], [6.2, 23.0], [6.3, 23.0], [6.4, 23.0], [6.5, 23.0], [6.6, 23.0], [6.7, 23.0], [6.8, 23.0], [6.9, 23.0], [7.0, 23.0], [7.1, 23.0], [7.2, 23.0], [7.3, 23.0], [7.4, 23.0], [7.5, 24.0], [7.6, 24.0], [7.7, 24.0], [7.8, 24.0], [7.9, 24.0], [8.0, 24.0], [8.1, 24.0], [8.2, 24.0], [8.3, 24.0], [8.4, 24.0], [8.5, 24.0], [8.6, 24.0], [8.7, 24.0], [8.8, 24.0], [8.9, 24.0], [9.0, 24.0], [9.1, 24.0], [9.2, 24.0], [9.3, 24.0], [9.4, 24.0], [9.5, 24.0], [9.6, 24.0], [9.7, 24.0], [9.8, 24.0], [9.9, 24.0], [10.0, 24.0], [10.1, 24.0], [10.2, 24.0], [10.3, 24.0], [10.4, 24.0], [10.5, 24.0], [10.6, 24.0], [10.7, 24.0], [10.8, 24.0], [10.9, 24.0], [11.0, 25.0], [11.1, 25.0], [11.2, 25.0], [11.3, 25.0], [11.4, 25.0], [11.5, 25.0], [11.6, 25.0], [11.7, 25.0], [11.8, 25.0], [11.9, 25.0], [12.0, 25.0], [12.1, 25.0], [12.2, 25.0], [12.3, 25.0], [12.4, 25.0], [12.5, 25.0], [12.6, 25.0], [12.7, 25.0], [12.8, 25.0], [12.9, 25.0], [13.0, 25.0], [13.1, 25.0], [13.2, 25.0], [13.3, 25.0], [13.4, 25.0], [13.5, 25.0], [13.6, 25.0], [13.7, 25.0], [13.8, 25.0], [13.9, 25.0], [14.0, 25.0], [14.1, 25.0], [14.2, 25.0], [14.3, 25.0], [14.4, 25.0], [14.5, 25.0], [14.6, 25.0], [14.7, 25.0], [14.8, 25.0], [14.9, 25.0], [15.0, 25.0], [15.1, 25.0], [15.2, 25.0], [15.3, 25.0], [15.4, 25.0], [15.5, 25.0], [15.6, 25.0], [15.7, 25.0], [15.8, 25.0], [15.9, 25.0], [16.0, 26.0], [16.1, 26.0], [16.2, 26.0], [16.3, 26.0], [16.4, 26.0], [16.5, 26.0], [16.6, 26.0], [16.7, 26.0], [16.8, 26.0], [16.9, 26.0], [17.0, 26.0], [17.1, 26.0], [17.2, 26.0], [17.3, 26.0], [17.4, 26.0], [17.5, 26.0], [17.6, 26.0], [17.7, 26.0], [17.8, 26.0], [17.9, 26.0], [18.0, 26.0], [18.1, 26.0], [18.2, 26.0], [18.3, 26.0], [18.4, 26.0], [18.5, 26.0], [18.6, 26.0], [18.7, 26.0], [18.8, 26.0], [18.9, 26.0], [19.0, 26.0], [19.1, 26.0], [19.2, 26.0], [19.3, 26.0], [19.4, 26.0], [19.5, 26.0], [19.6, 26.0], [19.7, 26.0], [19.8, 26.0], [19.9, 26.0], [20.0, 26.0], [20.1, 26.0], [20.2, 26.0], [20.3, 26.0], [20.4, 26.0], [20.5, 26.0], [20.6, 26.0], [20.7, 26.0], [20.8, 26.0], [20.9, 26.0], [21.0, 26.0], [21.1, 26.0], [21.2, 26.0], [21.3, 26.0], [21.4, 26.0], [21.5, 26.0], [21.6, 26.0], [21.7, 26.0], [21.8, 26.0], [21.9, 27.0], [22.0, 27.0], [22.1, 27.0], [22.2, 27.0], [22.3, 27.0], [22.4, 27.0], [22.5, 27.0], [22.6, 27.0], [22.7, 27.0], [22.8, 27.0], [22.9, 27.0], [23.0, 27.0], [23.1, 27.0], [23.2, 27.0], [23.3, 27.0], [23.4, 27.0], [23.5, 27.0], [23.6, 27.0], [23.7, 27.0], [23.8, 27.0], [23.9, 27.0], [24.0, 27.0], [24.1, 27.0], [24.2, 27.0], [24.3, 27.0], [24.4, 27.0], [24.5, 27.0], [24.6, 27.0], [24.7, 27.0], [24.8, 27.0], [24.9, 27.0], [25.0, 27.0], [25.1, 27.0], [25.2, 27.0], [25.3, 27.0], [25.4, 27.0], [25.5, 27.0], [25.6, 27.0], [25.7, 27.0], [25.8, 27.0], [25.9, 27.0], [26.0, 27.0], [26.1, 27.0], [26.2, 27.0], [26.3, 27.0], [26.4, 27.0], [26.5, 27.0], [26.6, 27.0], [26.7, 27.0], [26.8, 27.0], [26.9, 27.0], [27.0, 27.0], [27.1, 28.0], [27.2, 28.0], [27.3, 28.0], [27.4, 28.0], [27.5, 28.0], [27.6, 28.0], [27.7, 28.0], [27.8, 28.0], [27.9, 28.0], [28.0, 28.0], [28.1, 28.0], [28.2, 28.0], [28.3, 28.0], [28.4, 28.0], [28.5, 28.0], [28.6, 28.0], [28.7, 28.0], [28.8, 28.0], [28.9, 28.0], [29.0, 28.0], [29.1, 28.0], [29.2, 28.0], [29.3, 28.0], [29.4, 28.0], [29.5, 28.0], [29.6, 28.0], [29.7, 28.0], [29.8, 28.0], [29.9, 28.0], [30.0, 28.0], [30.1, 28.0], [30.2, 28.0], [30.3, 28.0], [30.4, 28.0], [30.5, 28.0], [30.6, 28.0], [30.7, 28.0], [30.8, 28.0], [30.9, 28.0], [31.0, 28.0], [31.1, 28.0], [31.2, 28.0], [31.3, 28.0], [31.4, 28.0], [31.5, 28.0], [31.6, 28.0], [31.7, 28.0], [31.8, 28.0], [31.9, 28.0], [32.0, 28.0], [32.1, 28.0], [32.2, 28.0], [32.3, 28.0], [32.4, 28.0], [32.5, 28.0], [32.6, 28.0], [32.7, 28.0], [32.8, 28.0], [32.9, 28.0], [33.0, 28.0], [33.1, 28.0], [33.2, 29.0], [33.3, 29.0], [33.4, 29.0], [33.5, 29.0], [33.6, 29.0], [33.7, 29.0], [33.8, 29.0], [33.9, 29.0], [34.0, 29.0], [34.1, 29.0], [34.2, 29.0], [34.3, 29.0], [34.4, 29.0], [34.5, 29.0], [34.6, 29.0], [34.7, 29.0], [34.8, 29.0], [34.9, 29.0], [35.0, 29.0], [35.1, 29.0], [35.2, 29.0], [35.3, 29.0], [35.4, 29.0], [35.5, 29.0], [35.6, 29.0], [35.7, 29.0], [35.8, 29.0], [35.9, 29.0], [36.0, 29.0], [36.1, 29.0], [36.2, 29.0], [36.3, 29.0], [36.4, 29.0], [36.5, 29.0], [36.6, 29.0], [36.7, 29.0], [36.8, 29.0], [36.9, 29.0], [37.0, 29.0], [37.1, 29.0], [37.2, 29.0], [37.3, 29.0], [37.4, 29.0], [37.5, 29.0], [37.6, 29.0], [37.7, 29.0], [37.8, 29.0], [37.9, 29.0], [38.0, 29.0], [38.1, 29.0], [38.2, 29.0], [38.3, 29.0], [38.4, 29.0], [38.5, 29.0], [38.6, 29.0], [38.7, 29.0], [38.8, 30.0], [38.9, 30.0], [39.0, 30.0], [39.1, 30.0], [39.2, 30.0], [39.3, 30.0], [39.4, 30.0], [39.5, 30.0], [39.6, 30.0], [39.7, 30.0], [39.8, 30.0], [39.9, 30.0], [40.0, 30.0], [40.1, 30.0], [40.2, 30.0], [40.3, 30.0], [40.4, 30.0], [40.5, 30.0], [40.6, 30.0], [40.7, 30.0], [40.8, 30.0], [40.9, 30.0], [41.0, 30.0], [41.1, 30.0], [41.2, 30.0], [41.3, 30.0], [41.4, 30.0], [41.5, 30.0], [41.6, 30.0], [41.7, 30.0], [41.8, 30.0], [41.9, 30.0], [42.0, 30.0], [42.1, 30.0], [42.2, 30.0], [42.3, 30.0], [42.4, 30.0], [42.5, 30.0], [42.6, 30.0], [42.7, 30.0], [42.8, 30.0], [42.9, 30.0], [43.0, 30.0], [43.1, 30.0], [43.2, 30.0], [43.3, 30.0], [43.4, 31.0], [43.5, 31.0], [43.6, 31.0], [43.7, 31.0], [43.8, 31.0], [43.9, 31.0], [44.0, 31.0], [44.1, 31.0], [44.2, 31.0], [44.3, 31.0], [44.4, 31.0], [44.5, 31.0], [44.6, 31.0], [44.7, 31.0], [44.8, 31.0], [44.9, 31.0], [45.0, 31.0], [45.1, 31.0], [45.2, 31.0], [45.3, 31.0], [45.4, 31.0], [45.5, 31.0], [45.6, 31.0], [45.7, 31.0], [45.8, 31.0], [45.9, 31.0], [46.0, 31.0], [46.1, 31.0], [46.2, 31.0], [46.3, 31.0], [46.4, 31.0], [46.5, 31.0], [46.6, 31.0], [46.7, 31.0], [46.8, 31.0], [46.9, 31.0], [47.0, 31.0], [47.1, 31.0], [47.2, 31.0], [47.3, 32.0], [47.4, 32.0], [47.5, 32.0], [47.6, 32.0], [47.7, 32.0], [47.8, 32.0], [47.9, 32.0], [48.0, 32.0], [48.1, 32.0], [48.2, 32.0], [48.3, 32.0], [48.4, 32.0], [48.5, 32.0], [48.6, 32.0], [48.7, 32.0], [48.8, 32.0], [48.9, 32.0], [49.0, 32.0], [49.1, 32.0], [49.2, 32.0], [49.3, 32.0], [49.4, 32.0], [49.5, 32.0], [49.6, 32.0], [49.7, 32.0], [49.8, 32.0], [49.9, 32.0], [50.0, 32.0], [50.1, 32.0], [50.2, 32.0], [50.3, 32.0], [50.4, 32.0], [50.5, 32.0], [50.6, 32.0], [50.7, 33.0], [50.8, 33.0], [50.9, 33.0], [51.0, 33.0], [51.1, 33.0], [51.2, 33.0], [51.3, 33.0], [51.4, 33.0], [51.5, 33.0], [51.6, 33.0], [51.7, 33.0], [51.8, 33.0], [51.9, 33.0], [52.0, 33.0], [52.1, 33.0], [52.2, 33.0], [52.3, 33.0], [52.4, 33.0], [52.5, 33.0], [52.6, 33.0], [52.7, 33.0], [52.8, 33.0], [52.9, 33.0], [53.0, 33.0], [53.1, 33.0], [53.2, 33.0], [53.3, 33.0], [53.4, 33.0], [53.5, 33.0], [53.6, 33.0], [53.7, 33.0], [53.8, 33.0], [53.9, 33.0], [54.0, 33.0], [54.1, 34.0], [54.2, 34.0], [54.3, 34.0], [54.4, 34.0], [54.5, 34.0], [54.6, 34.0], [54.7, 34.0], [54.8, 34.0], [54.9, 34.0], [55.0, 34.0], [55.1, 34.0], [55.2, 34.0], [55.3, 34.0], [55.4, 34.0], [55.5, 34.0], [55.6, 34.0], [55.7, 34.0], [55.8, 34.0], [55.9, 34.0], [56.0, 34.0], [56.1, 34.0], [56.2, 35.0], [56.3, 35.0], [56.4, 35.0], [56.5, 35.0], [56.6, 35.0], [56.7, 35.0], [56.8, 35.0], [56.9, 35.0], [57.0, 35.0], [57.1, 35.0], [57.2, 35.0], [57.3, 35.0], [57.4, 35.0], [57.5, 35.0], [57.6, 35.0], [57.7, 35.0], [57.8, 35.0], [57.9, 35.0], [58.0, 35.0], [58.1, 36.0], [58.2, 36.0], [58.3, 36.0], [58.4, 36.0], [58.5, 36.0], [58.6, 36.0], [58.7, 36.0], [58.8, 36.0], [58.9, 36.0], [59.0, 36.0], [59.1, 37.0], [59.2, 37.0], [59.3, 37.0], [59.4, 37.0], [59.5, 37.0], [59.6, 37.0], [59.7, 37.0], [59.8, 37.0], [59.9, 37.0], [60.0, 37.0], [60.1, 37.0], [60.2, 37.0], [60.3, 37.0], [60.4, 38.0], [60.5, 38.0], [60.6, 38.0], [60.7, 38.0], [60.8, 38.0], [60.9, 38.0], [61.0, 38.0], [61.1, 38.0], [61.2, 38.0], [61.3, 38.0], [61.4, 38.0], [61.5, 38.0], [61.6, 38.0], [61.7, 38.0], [61.8, 39.0], [61.9, 39.0], [62.0, 39.0], [62.1, 39.0], [62.2, 39.0], [62.3, 39.0], [62.4, 39.0], [62.5, 39.0], [62.6, 39.0], [62.7, 39.0], [62.8, 40.0], [62.9, 40.0], [63.0, 40.0], [63.1, 40.0], [63.2, 40.0], [63.3, 40.0], [63.4, 40.0], [63.5, 40.0], [63.6, 40.0], [63.7, 40.0], [63.8, 40.0], [63.9, 40.0], [64.0, 40.0], [64.1, 40.0], [64.2, 40.0], [64.3, 40.0], [64.4, 40.0], [64.5, 40.0], [64.6, 41.0], [64.7, 41.0], [64.8, 41.0], [64.9, 41.0], [65.0, 41.0], [65.1, 41.0], [65.2, 41.0], [65.3, 41.0], [65.4, 41.0], [65.5, 41.0], [65.6, 41.0], [65.7, 41.0], [65.8, 41.0], [65.9, 42.0], [66.0, 42.0], [66.1, 42.0], [66.2, 42.0], [66.3, 42.0], [66.4, 42.0], [66.5, 43.0], [66.6, 43.0], [66.7, 43.0], [66.8, 43.0], [66.9, 43.0], [67.0, 43.0], [67.1, 44.0], [67.2, 44.0], [67.3, 44.0], [67.4, 44.0], [67.5, 44.0], [67.6, 44.0], [67.7, 44.0], [67.8, 44.0], [67.9, 44.0], [68.0, 44.0], [68.1, 44.0], [68.2, 45.0], [68.3, 45.0], [68.4, 45.0], [68.5, 45.0], [68.6, 45.0], [68.7, 45.0], [68.8, 45.0], [68.9, 45.0], [69.0, 46.0], [69.1, 46.0], [69.2, 46.0], [69.3, 46.0], [69.4, 46.0], [69.5, 46.0], [69.6, 47.0], [69.7, 47.0], [69.8, 47.0], [69.9, 47.0], [70.0, 47.0], [70.1, 47.0], [70.2, 47.0], [70.3, 47.0], [70.4, 47.0], [70.5, 48.0], [70.6, 48.0], [70.7, 48.0], [70.8, 48.0], [70.9, 48.0], [71.0, 48.0], [71.1, 48.0], [71.2, 48.0], [71.3, 49.0], [71.4, 49.0], [71.5, 49.0], [71.6, 49.0], [71.7, 49.0], [71.8, 49.0], [71.9, 49.0], [72.0, 49.0], [72.1, 49.0], [72.2, 49.0], [72.3, 49.0], [72.4, 49.0], [72.5, 49.0], [72.6, 50.0], [72.7, 50.0], [72.8, 50.0], [72.9, 50.0], [73.0, 51.0], [73.1, 51.0], [73.2, 51.0], [73.3, 51.0], [73.4, 51.0], [73.5, 52.0], [73.6, 52.0], [73.7, 52.0], [73.8, 52.0], [73.9, 52.0], [74.0, 52.0], [74.1, 52.0], [74.2, 53.0], [74.3, 53.0], [74.4, 53.0], [74.5, 53.0], [74.6, 53.0], [74.7, 53.0], [74.8, 53.0], [74.9, 54.0], [75.0, 54.0], [75.1, 54.0], [75.2, 54.0], [75.3, 54.0], [75.4, 54.0], [75.5, 55.0], [75.6, 55.0], [75.7, 55.0], [75.8, 55.0], [75.9, 55.0], [76.0, 56.0], [76.1, 56.0], [76.2, 56.0], [76.3, 56.0], [76.4, 56.0], [76.5, 56.0], [76.6, 56.0], [76.7, 56.0], [76.8, 56.0], [76.9, 56.0], [77.0, 57.0], [77.1, 57.0], [77.2, 57.0], [77.3, 57.0], [77.4, 57.0], [77.5, 57.0], [77.6, 58.0], [77.7, 58.0], [77.8, 58.0], [77.9, 58.0], [78.0, 59.0], [78.1, 59.0], [78.2, 59.0], [78.3, 59.0], [78.4, 59.0], [78.5, 59.0], [78.6, 60.0], [78.7, 60.0], [78.8, 60.0], [78.9, 60.0], [79.0, 60.0], [79.1, 60.0], [79.2, 60.0], [79.3, 61.0], [79.4, 61.0], [79.5, 61.0], [79.6, 62.0], [79.7, 63.0], [79.8, 63.0], [79.9, 63.0], [80.0, 63.0], [80.1, 63.0], [80.2, 63.0], [80.3, 63.0], [80.4, 63.0], [80.5, 64.0], [80.6, 64.0], [80.7, 64.0], [80.8, 64.0], [80.9, 64.0], [81.0, 64.0], [81.1, 64.0], [81.2, 65.0], [81.3, 66.0], [81.4, 67.0], [81.5, 67.0], [81.6, 68.0], [81.7, 68.0], [81.8, 68.0], [81.9, 68.0], [82.0, 69.0], [82.1, 70.0], [82.2, 70.0], [82.3, 71.0], [82.4, 71.0], [82.5, 71.0], [82.6, 71.0], [82.7, 71.0], [82.8, 72.0], [82.9, 72.0], [83.0, 72.0], [83.1, 72.0], [83.2, 73.0], [83.3, 73.0], [83.4, 74.0], [83.5, 74.0], [83.6, 74.0], [83.7, 74.0], [83.8, 75.0], [83.9, 75.0], [84.0, 76.0], [84.1, 76.0], [84.2, 76.0], [84.3, 76.0], [84.4, 77.0], [84.5, 77.0], [84.6, 78.0], [84.7, 78.0], [84.8, 79.0], [84.9, 79.0], [85.0, 79.0], [85.1, 80.0], [85.2, 80.0], [85.3, 81.0], [85.4, 81.0], [85.5, 82.0], [85.6, 82.0], [85.7, 83.0], [85.8, 83.0], [85.9, 84.0], [86.0, 84.0], [86.1, 85.0], [86.2, 85.0], [86.3, 86.0], [86.4, 86.0], [86.5, 88.0], [86.6, 88.0], [86.7, 89.0], [86.8, 89.0], [86.9, 89.0], [87.0, 89.0], [87.1, 89.0], [87.2, 91.0], [87.3, 91.0], [87.4, 92.0], [87.5, 93.0], [87.6, 94.0], [87.7, 94.0], [87.8, 94.0], [87.9, 95.0], [88.0, 95.0], [88.1, 95.0], [88.2, 96.0], [88.3, 96.0], [88.4, 97.0], [88.5, 98.0], [88.6, 100.0], [88.7, 100.0], [88.8, 101.0], [88.9, 101.0], [89.0, 102.0], [89.1, 103.0], [89.2, 103.0], [89.3, 104.0], [89.4, 104.0], [89.5, 104.0], [89.6, 104.0], [89.7, 104.0], [89.8, 106.0], [89.9, 107.0], [90.0, 107.0], [90.1, 107.0], [90.2, 108.0], [90.3, 109.0], [90.4, 109.0], [90.5, 109.0], [90.6, 110.0], [90.7, 112.0], [90.8, 116.0], [90.9, 139.0], [91.0, 141.0], [91.1, 143.0], [91.2, 145.0], [91.3, 146.0], [91.4, 151.0], [91.5, 152.0], [91.6, 153.0], [91.7, 177.0], [91.8, 177.0], [91.9, 180.0], [92.0, 181.0], [92.1, 181.0], [92.2, 183.0], [92.3, 185.0], [92.4, 185.0], [92.5, 186.0], [92.6, 187.0], [92.7, 188.0], [92.8, 189.0], [92.9, 191.0], [93.0, 192.0], [93.1, 193.0], [93.2, 193.0], [93.3, 194.0], [93.4, 197.0], [93.5, 200.0], [93.6, 200.0], [93.7, 200.0], [93.8, 202.0], [93.9, 203.0], [94.0, 204.0], [94.1, 204.0], [94.2, 204.0], [94.3, 208.0], [94.4, 208.0], [94.5, 208.0], [94.6, 209.0], [94.7, 211.0], [94.8, 211.0], [94.9, 212.0], [95.0, 213.0], [95.1, 213.0], [95.2, 215.0], [95.3, 216.0], [95.4, 218.0], [95.5, 218.0], [95.6, 219.0], [95.7, 219.0], [95.8, 220.0], [95.9, 221.0], [96.0, 222.0], [96.1, 222.0], [96.2, 223.0], [96.3, 223.0], [96.4, 224.0], [96.5, 224.0], [96.6, 227.0], [96.7, 227.0], [96.8, 228.0], [96.9, 228.0], [97.0, 228.0], [97.1, 229.0], [97.2, 230.0], [97.3, 230.0], [97.4, 231.0], [97.5, 232.0], [97.6, 235.0], [97.7, 236.0], [97.8, 236.0], [97.9, 237.0], [98.0, 239.0], [98.1, 241.0], [98.2, 242.0], [98.3, 243.0], [98.4, 243.0], [98.5, 244.0], [98.6, 244.0], [98.7, 247.0], [98.8, 248.0], [98.9, 249.0], [99.0, 251.0], [99.1, 254.0], [99.2, 255.0], [99.3, 256.0], [99.4, 257.0], [99.5, 259.0], [99.6, 261.0], [99.7, 262.0], [99.8, 262.0], [99.9, 272.0]], "isOverall": false, "label": "Create Order", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 49.0, "minX": 0.0, "maxY": 886.0, "series": [{"data": [[0.0, 886.0], [100.0, 49.0], [200.0, 65.0]], "isOverall": false, "label": "Create Order", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1000.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1000.0, "series": [{"data": [[0.0, 1000.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 45.67045454545455, "minX": 1.6343729471E12, "maxY": 772.1372549019609, "series": [{"data": [[1.6343729483E12, 47.915492957746466], [1.6343729478E12, 634.0084745762712], [1.6343729473E12, 166.12837837837836], [1.6343729472E12, 47.78217821782179], [1.6343729474E12, 304.7777777777777], [1.6343729479E12, 702.0694444444443], [1.634372948E12, 772.1372549019609], [1.6343729475E12, 365.2165605095543], [1.6343729482E12, 109.57142857142858], [1.6343729477E12, 505.1473684210528], [1.6343729481E12, 695.7777777777777], [1.6343729471E12, 45.67045454545455], [1.6343729476E12, 425.3500000000001]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 100, "maxX": 1.6343729483E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 17.0, "minX": 1.0, "maxY": 228.0, "series": [{"data": [[2.0, 185.0], [14.0, 21.0], [15.0, 23.0], [16.0, 22.5], [17.0, 55.333333333333336], [18.0, 49.0], [19.0, 51.0], [20.0, 42.0], [21.0, 42.0], [22.0, 49.0], [23.0, 45.333333333333336], [24.0, 54.5], [25.0, 44.333333333333336], [26.0, 30.0], [27.0, 39.111111111111114], [28.0, 31.0], [29.0, 50.666666666666664], [30.0, 39.8], [31.0, 36.83333333333333], [33.0, 39.87499999999999], [32.0, 28.75], [35.0, 28.6], [34.0, 28.0], [37.0, 28.6], [36.0, 27.0], [39.0, 72.0], [40.0, 67.0], [43.0, 214.68292682926824], [42.0, 50.0], [45.0, 137.5], [44.0, 134.5], [47.0, 115.5], [46.0, 114.0], [49.0, 139.0], [48.0, 43.2], [51.0, 128.0], [50.0, 38.0], [53.0, 31.0], [52.0, 146.0], [55.0, 116.6], [54.0, 68.25], [57.0, 170.66666666666666], [56.0, 29.0], [59.0, 40.666666666666664], [58.0, 116.5], [61.0, 164.33333333333334], [60.0, 83.0], [63.0, 61.0], [62.0, 33.0], [67.0, 151.0], [66.0, 162.0], [65.0, 114.5], [64.0, 42.0], [71.0, 97.25], [70.0, 103.0], [69.0, 150.75], [68.0, 43.0], [75.0, 130.0], [74.0, 66.83333333333334], [73.0, 58.375], [72.0, 132.5], [77.0, 107.66666666666666], [79.0, 228.0], [78.0, 221.0], [76.0, 228.0], [82.0, 57.57142857142857], [83.0, 213.0], [81.0, 227.0], [80.0, 224.0], [84.0, 211.0], [91.0, 30.285714285714285], [90.0, 28.666666666666668], [99.0, 30.875], [98.0, 35.5], [107.0, 29.333333333333332], [108.0, 30.666666666666668], [115.0, 29.0], [114.0, 27.25], [127.0, 31.5], [126.0, 31.444444444444443], [133.0, 28.8], [128.0, 29.0], [142.0, 28.333333333333332], [158.0, 28.0], [157.0, 28.333333333333332], [154.0, 30.818181818181817], [165.0, 26.666666666666664], [164.0, 28.0], [178.0, 27.8], [177.0, 33.400000000000006], [176.0, 33.333333333333336], [191.0, 31.5], [190.0, 31.5], [192.0, 31.0], [204.0, 26.25], [200.0, 28.846153846153843], [223.0, 26.5], [216.0, 26.933333333333334], [231.0, 25.6], [232.0, 28.0], [281.0, 53.0], [301.0, 60.0], [300.0, 63.666666666666664], [299.0, 61.00000000000001], [313.0, 59.06666666666667], [341.0, 96.0], [340.0, 89.0], [355.0, 81.21428571428571], [367.0, 30.333333333333332], [366.0, 34.0], [364.0, 34.57142857142857], [359.0, 42.0], [358.0, 89.75], [357.0, 101.8], [354.0, 85.48148148148148], [353.0, 76.31818181818181], [380.0, 27.0], [375.0, 23.6], [369.0, 25.0], [399.0, 26.5], [394.0, 26.166666666666668], [392.0, 30.714285714285715], [385.0, 30.0], [414.0, 23.0], [415.0, 20.5], [413.0, 23.0], [412.0, 24.0], [410.0, 20.0], [409.0, 20.0], [408.0, 28.0], [405.0, 29.571428571428573], [401.0, 26.5], [400.0, 30.0], [404.0, 30.0], [426.0, 23.0], [420.0, 19.5], [419.0, 21.0], [417.0, 20.0], [447.0, 22.0], [446.0, 23.5], [440.0, 22.5], [432.0, 21.0], [462.0, 26.428571428571427], [457.0, 26.42857142857143], [452.0, 24.0], [474.0, 22.5], [472.0, 25.2], [469.0, 29.5], [465.0, 23.0], [492.0, 25.4], [485.0, 22.857142857142858], [481.0, 24.25], [510.0, 22.25], [508.0, 26.2], [501.0, 24.857142857142858], [499.0, 27.666666666666668], [542.0, 27.75], [532.0, 23.5], [528.0, 24.0], [519.0, 21.2], [515.0, 23.142857142857142], [520.0, 152.0], [555.0, 27.333333333333336], [551.0, 29.625], [605.0, 49.375], [586.0, 41.75], [585.0, 43.0], [638.0, 32.89473684210527], [632.0, 38.6], [628.0, 41.333333333333336], [627.0, 33.0], [626.0, 45.8888888888889], [625.0, 45.272727272727266], [618.0, 54.5], [617.0, 48.5], [615.0, 52.0], [664.0, 28.8], [660.0, 28.6], [657.0, 105.44444444444444], [656.0, 69.66666666666666], [649.0, 32.2], [648.0, 29.5], [641.0, 29.454545454545457], [700.0, 29.0], [694.0, 29.666666666666668], [692.0, 30.749999999999996], [687.0, 33.0], [683.0, 34.5], [677.0, 33.833333333333336], [731.0, 25.5], [735.0, 26.0], [718.0, 17.0], [716.0, 18.5], [715.0, 22.5], [714.0, 24.266666666666666], [713.0, 29.0], [711.0, 28.333333333333332], [704.0, 26.0], [763.0, 43.0], [759.0, 44.44444444444444], [747.0, 35.5], [746.0, 37.6], [796.0, 39.0], [793.0, 47.5], [792.0, 42.4], [788.0, 49.0], [784.0, 51.0], [783.0, 44.0], [775.0, 51.33333333333333], [832.0, 85.0], [1.0, 112.0]], "isOverall": false, "label": "Create Order", "isController": false}, {"data": [[342.68499999999983, 54.890000000000015]], "isOverall": false, "label": "Create Order-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 832.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 19440.0, "minX": 1.6343729471E12, "maxY": 660970.0, "series": [{"data": [[1.6343729483E12, 153360.0], [1.6343729478E12, 254880.0], [1.6343729473E12, 319680.0], [1.6343729472E12, 218160.0], [1.6343729474E12, 77760.0], [1.6343729479E12, 155520.0], [1.634372948E12, 110160.0], [1.6343729475E12, 339120.0], [1.6343729482E12, 30240.0], [1.6343729477E12, 205200.0], [1.6343729481E12, 19440.0], [1.6343729471E12, 190080.0], [1.6343729476E12, 86400.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6343729483E12, 298910.0], [1.6343729478E12, 496780.0], [1.6343729473E12, 623080.0], [1.6343729472E12, 425210.0], [1.6343729474E12, 151560.0], [1.6343729479E12, 303120.0], [1.634372948E12, 214710.0], [1.6343729475E12, 660970.0], [1.6343729482E12, 58940.0], [1.6343729477E12, 399950.0], [1.6343729481E12, 37890.0], [1.6343729471E12, 370480.0], [1.6343729476E12, 168400.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 100, "maxX": 1.6343729483E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 24.6, "minX": 1.6343729471E12, "maxY": 217.64788732394373, "series": [{"data": [[1.6343729483E12, 217.64788732394373], [1.6343729478E12, 37.94915254237288], [1.6343729473E12, 29.317567567567572], [1.6343729472E12, 29.594059405940595], [1.6343729474E12, 61.02777777777778], [1.6343729479E12, 28.208333333333332], [1.634372948E12, 45.35294117647058], [1.6343729475E12, 59.89808917197449], [1.6343729482E12, 216.21428571428572], [1.6343729477E12, 25.09473684210526], [1.6343729481E12, 132.0], [1.6343729471E12, 46.624999999999986], [1.6343729476E12, 24.6]], "isOverall": false, "label": "Create Order", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1.6343729483E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 24.042105263157893, "minX": 1.6343729471E12, "maxY": 214.07142857142853, "series": [{"data": [[1.6343729483E12, 211.74647887323954], [1.6343729478E12, 35.22881355932205], [1.6343729473E12, 26.94594594594595], [1.6343729472E12, 26.96039603960396], [1.6343729474E12, 46.472222222222236], [1.6343729479E12, 27.59722222222222], [1.634372948E12, 44.03921568627452], [1.6343729475E12, 56.92356687898089], [1.6343729482E12, 214.07142857142853], [1.6343729477E12, 24.042105263157893], [1.6343729481E12, 125.88888888888889], [1.6343729471E12, 36.829545454545475], [1.6343729476E12, 24.150000000000002]], "isOverall": false, "label": "Create Order", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1.6343729483E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.22499999999999998, "minX": 1.6343729471E12, "maxY": 1.352112676056338, "series": [{"data": [[1.6343729483E12, 1.352112676056338], [1.6343729478E12, 0.3050847457627119], [1.6343729473E12, 0.3851351351351351], [1.6343729472E12, 0.6732673267326736], [1.6343729474E12, 0.3333333333333333], [1.6343729479E12, 0.4861111111111108], [1.634372948E12, 0.47058823529411775], [1.6343729475E12, 0.39490445859872614], [1.6343729482E12, 0.5], [1.6343729477E12, 0.2947368421052631], [1.6343729481E12, 1.0], [1.6343729471E12, 0.7159090909090909], [1.6343729476E12, 0.22499999999999998]], "isOverall": false, "label": "Create Order", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1.6343729483E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 17.0, "minX": 1.6343729471E12, "maxY": 272.0, "series": [{"data": [[1.6343729483E12, 272.0], [1.6343729478E12, 59.0], [1.6343729473E12, 41.0], [1.6343729472E12, 116.0], [1.6343729474E12, 96.0], [1.6343729479E12, 37.0], [1.634372948E12, 57.0], [1.6343729475E12, 110.0], [1.6343729482E12, 228.0], [1.6343729477E12, 33.0], [1.6343729481E12, 153.0], [1.6343729471E12, 81.0], [1.6343729476E12, 34.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6343729483E12, 255.8], [1.6343729478E12, 52.10000000000001], [1.6343729473E12, 33.0], [1.6343729472E12, 33.0], [1.6343729474E12, 68.60000000000001], [1.6343729479E12, 34.7], [1.634372948E12, 54.800000000000004], [1.6343729475E12, 103.0], [1.6343729482E12, 228.0], [1.6343729477E12, 29.400000000000006], [1.6343729481E12, 153.0], [1.6343729471E12, 76.0], [1.6343729476E12, 30.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6343729483E12, 272.0], [1.6343729478E12, 58.81], [1.6343729473E12, 41.0], [1.6343729472E12, 114.4800000000003], [1.6343729474E12, 96.0], [1.6343729479E12, 37.0], [1.634372948E12, 57.0], [1.6343729475E12, 109.41999999999999], [1.6343729482E12, 228.0], [1.6343729477E12, 33.0], [1.6343729481E12, 153.0], [1.6343729471E12, 81.0], [1.6343729476E12, 34.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6343729483E12, 261.4], [1.6343729478E12, 56.0], [1.6343729473E12, 37.19999999999993], [1.6343729472E12, 35.0], [1.6343729474E12, 90.04999999999998], [1.6343729479E12, 36.0], [1.634372948E12, 56.4], [1.6343729475E12, 107.0], [1.6343729482E12, 228.0], [1.6343729477E12, 31.0], [1.6343729481E12, 153.0], [1.6343729471E12, 78.0], [1.6343729476E12, 33.89999999999999]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6343729483E12, 112.0], [1.6343729478E12, 23.0], [1.6343729473E12, 22.0], [1.6343729472E12, 22.0], [1.6343729474E12, 51.0], [1.6343729479E12, 17.0], [1.634372948E12, 33.0], [1.6343729475E12, 21.0], [1.6343729482E12, 152.0], [1.6343729477E12, 18.0], [1.6343729481E12, 84.0], [1.6343729471E12, 20.0], [1.6343729476E12, 18.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6343729483E12, 218.0], [1.6343729478E12, 37.0], [1.6343729473E12, 29.0], [1.6343729472E12, 28.0], [1.6343729474E12, 60.0], [1.6343729479E12, 28.5], [1.634372948E12, 45.0], [1.6343729475E12, 56.0], [1.6343729482E12, 221.5], [1.6343729477E12, 25.0], [1.6343729481E12, 143.0], [1.6343729471E12, 41.5], [1.6343729476E12, 24.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 100, "maxX": 1.6343729483E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 30.0, "minX": 145.0, "maxY": 188.0, "series": [{"data": [[145.0, 188.0], [855.0, 30.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 855.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 28.0, "minX": 145.0, "maxY": 183.0, "series": [{"data": [[145.0, 183.0], [855.0, 28.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 855.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 10.0, "minX": 1.634372947E12, "maxY": 1370.0, "series": [{"data": [[1.6343729478E12, 1190.0], [1.6343729473E12, 1370.0], [1.6343729472E12, 1190.0], [1.6343729474E12, 1140.0], [1.6343729479E12, 600.0], [1.634372948E12, 640.0], [1.6343729475E12, 570.0], [1.634372947E12, 170.0], [1.6343729482E12, 10.0], [1.6343729477E12, 1050.0], [1.6343729481E12, 570.0], [1.6343729471E12, 990.0], [1.6343729476E12, 510.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 100, "maxX": 1.6343729482E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 90.0, "minX": 1.6343729471E12, "maxY": 1570.0, "series": [{"data": [[1.6343729483E12, 710.0], [1.6343729478E12, 1180.0], [1.6343729473E12, 1480.0], [1.6343729472E12, 1010.0], [1.6343729474E12, 360.0], [1.6343729479E12, 720.0], [1.634372948E12, 510.0], [1.6343729475E12, 1570.0], [1.6343729482E12, 140.0], [1.6343729477E12, 950.0], [1.6343729481E12, 90.0], [1.6343729471E12, 880.0], [1.6343729476E12, 400.0]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 100, "maxX": 1.6343729483E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 90.0, "minX": 1.6343729471E12, "maxY": 1570.0, "series": [{"data": [[1.6343729483E12, 710.0], [1.6343729478E12, 1180.0], [1.6343729473E12, 1480.0], [1.6343729472E12, 1010.0], [1.6343729474E12, 360.0], [1.6343729479E12, 720.0], [1.634372948E12, 510.0], [1.6343729475E12, 1570.0], [1.6343729482E12, 140.0], [1.6343729477E12, 950.0], [1.6343729481E12, 90.0], [1.6343729471E12, 880.0], [1.6343729476E12, 400.0]], "isOverall": false, "label": "Create Order-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1.6343729483E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 90.0, "minX": 1.6343729471E12, "maxY": 1570.0, "series": [{"data": [[1.6343729483E12, 710.0], [1.6343729478E12, 1180.0], [1.6343729473E12, 1480.0], [1.6343729472E12, 1010.0], [1.6343729474E12, 360.0], [1.6343729479E12, 720.0], [1.634372948E12, 510.0], [1.6343729475E12, 1570.0], [1.6343729482E12, 140.0], [1.6343729477E12, 950.0], [1.6343729481E12, 90.0], [1.6343729471E12, 880.0], [1.6343729476E12, 400.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1.6343729483E12, "title": "Total Transactions Per Second"}},
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

