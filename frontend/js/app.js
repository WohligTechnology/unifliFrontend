// JavaScript Document
var firstapp = angular.module('myApp', [
    'ui.router',
    'phonecatControllers',
    'templateservicemod',
    'navigationservice',
    'pascalprecht.translate',
    'angulartics',
    'angulartics.google.analytics',
    'ngMap'
    // 'datePicker'
]);
L.mapbox.accessToken = 'pk.eyJ1IjoibmFyZ2lzLXNoYWlraCIsImEiOiJjajVsMWdjbTgyN2t0MzBuejY0YWZvYnU1In0.sxNSmPeAZRDks6p3JmRUkw';

firstapp.config(function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {

    var templateURL = "views/template.html";
    // for http request with session
    $httpProvider.defaults.withCredentials = true;
    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: templateURL,
            controller: 'HomeCtrl'
        })
        .state('about', {
            url: "/about",
            templateUrl: templateURL,
            controller: 'AboutCtrl'
        })
        .state('google-map-2', {
            url: "/google-map-2",
            templateUrl: templateURL,
            controller: 'Google-Map-2Ctrl'
        })
        .state('google-map', {
            url: "/google-map",
            templateUrl: templateURL,
            controller: 'Google-MapCtrl'
        })
        .state('aboutus', {
            url: "/aboutus",
            templateUrl: templateURL,
            controller: 'AboutusCtrl'
        })
        .state('blog-individual', {
            url: "/blog-individual/:id",
            templateUrl: templateURL,
            controller: 'Blog-IndividualCtrl'
        })
        .state('blog', {
            url: "/blog",
            templateUrl: templateURL,
            controller: 'BlogCtrl'
        })
        .state('product', {
            url: "/product",
            templateUrl: templateURL,
            controller: 'ProductCtrl'
        })
        .state('support-dfm', {
            url: "/support-dfm",
            templateUrl: templateURL,
            controller: 'Support-DfmCtrl'
        })
        .state('support-dfm-2', {
            url: "/support-dfm-2",
            templateUrl: templateURL,
            controller: 'supportDfm2Ctrl'
        })

        .state('service', {
            url: "/service",
            templateUrl: templateURL,
            controller: 'ServiceCtrl'
        })
        .state('how-we-work', {
            url: "/how-we-work",
            templateUrl: templateURL,
            controller: 'How-We-WorkCtrl'
        })
        .state('checkout1', {
            url: "/checkout/:id",
            templateUrl: templateURL,
            controller: 'ShippingCtrl'
        })
        .state('checkout', {
            url: "/checkout/:id/:userId",
            templateUrl: templateURL,
            controller: 'ShippingCtrl'
        })
        .state('continue', {
            url: "/continue",
            templateUrl: templateURL,
            controller: 'ContinueCtrl'
        })
        .state('mycart', {
            url: "/mycart/:product",
            templateUrl: templateURL,
            controller: 'MycartCtrl'
        })
        .state('member-page', {
            url: "/member-page/:userId",
            templateUrl: templateURL,
            controller: 'MemberPageCtrl'
        })

        .state('member', {
            url: "/member",
            templateUrl: templateURL,
            controller: 'MemberCtrl'
        })
        .state('contactus', {
            url: "/contactus",
            templateUrl: templateURL,
            controller: 'ContactUsCtrl'
        })

        .state('privacypolicy', {
            url: "/privacypolicy",
            templateUrl: templateURL,
            controller: 'PrivacyPolicyCtrl'
        })
        .state('terms-and-conditions', {
            url: "/terms",
            templateUrl: templateURL,
            controller: 'TermsandConditionsCtrl'
        })
        .state('shipping', {
            url: "/shipping",
            templateUrl: templateURL,
            controller: 'ShippingCtrl'
        })
        .state('thankyou', {
            url: "/thankyou",
            templateUrl: templateURL,
            controller: 'ThankyouCtrl'
        })
        .state('sorry', {
            url: "/sorry",
            templateUrl: templateURL,
            controller: 'SorryCtrl'
        })
        .state('form', {
            url: "/form",
            templateUrl: templateURL,
            controller: 'FormCtrl'
        });
    $urlRouterProvider.otherwise("/");
    $locationProvider.html5Mode(isproduction);
});
firstapp.config(function(toastrConfig) {
    angular.extend(toastrConfig, {
      autoDismiss: false,
      containerId: 'toast-container',
      maxOpened: 0,    
      newestOnTop: true,
      positionClass: 'toast-top-right',
      preventDuplicates: false,
      preventOpenDuplicates: true
    });
  });
firstapp.directive('img', function ($compile, $parse) {
    return {
        restrict: 'E',
        replace: false,
        link: function ($scope, element, attrs) {
            var $element = $(element);
            if (!attrs.noloading) {
                $element.after("<img src='img/loading.gif' class='loading' />");
                var $loading = $element.next(".loading");
                $element.load(function () {
                    $loading.remove();
                    $(this).addClass("doneLoading");
                });
            } else {
                $($element).addClass("doneLoading");
            }
        }
    };
});

firstapp.directive('fancybox', function ($document) {
    return {
        restrict: 'EA',
        replace: false,
        link: function (scope, element, attr) {
            var $element = $(element);
            var target;
            if (attr.rel) {
                target = $("[rel='" + attr.rel + "']");
            } else {
                target = element;
            }

            target.fancybox({
                openEffect: 'fade',
                closeEffect: 'fade',
                closeBtn: true,
                padding: 0,
                helpers: {
                    media: {}
                }
            });
        }
    };
});
firstapp.directive('fancyboxBox', function ($document) {
    return {
        restrict: 'EA',
        replace: false,
        link: function (scope, element, attr) {
            var $element = $(element);
            var target;
            if (attr.rel) {
                target = $("[rel='" + attr.rel + "']");
            } else {
                target = element;
            }

            target.fancybox({
                openEffect: 'fade',
                closeEffect: 'fade',
                closeBtn: true,
                helpers: {
                    media: {}
                }
            });
        }
    };
});
firstapp.directive('autoHeight', function ($compile, $parse) {
    return {
        restrict: 'EA',
        replace: false,
        link: function ($scope, element, attrs) {
            var $element = $(element);
            var windowHeight = $(window).height();
            $element.css("min-height", windowHeight);
        }
    };
});

firstapp.config(function ($translateProvider) {
    $translateProvider.translations('en', LanguageEnglish);
    $translateProvider.translations('hi', LanguageHindi);
    $translateProvider.preferredLanguage('en');
});
firstapp.directive('onlyDigits', function () {
    return {
        require: 'ngModel',
        restrict: 'A',
        link: function (scope, element, attr, ctrl) {
            var digits;

            function inputValue(val) {
                if (val) {
                    if (attr.type == "tel") {
                        digits = val.replace(/[^0-9\+\\]/g, '');
                    } else {
                        digits = val.replace(/[^0-9\-\\]/g, '');
                    }


                    if (digits !== val) {
                        ctrl.$setViewValue(digits);
                        ctrl.$render();
                    }
                    return parseInt(digits, 10);
                }
                return undefined;
            }
            ctrl.$parsers.push(inputValue);
        }
    };
});
firstapp.filter('momentDate', function () {
    return function (date, format) {
        if (!format) {
            format = "Do MMM YYYY, ddd";
        }
        return moment(date).format(format);
    };
});
firstapp.filter('sumFilter', function () {

    return function (cartProducts) {
        var taxTotal = 0;
        _.forEach(cartProducts, function (n) {
            taxTotal = taxTotal + (n.price * n.quantity);
        });
        return taxTotal;
    };
});

///for map
firstapp.directive('mapBox', function ($http, $filter,  $rootScope, $uibModal) {
    return {
        restrict: 'C',
        link: function ($scope, element, attrs) {
            var locations = {
                upperLeft: [33.634922975312946,-117.71796969585633],
                lowerLeft: [33.63183776930793,-117.71794409609241],
                upperRight: [33.634939686447126,-117.71508573199736],
                lowerRight: [33.63185447850208,-117.71506023504203],
                center: [33.63338873599317,-117.71651493955808]
            }

            var imageUrl;
            var zoomLevel = [];
                // console.log("$scope.missionDetails.name", $scope.missionDetails.name);
                imageUrl = 'http://files.unifli.aero/M2017112google_tiles/{z}/{x}/{myY}.png';
                zoomLevel.push(16);
                zoomLevel.push(22);
              
            // This is the trickiest part - you'll need accurate coordinates for the
            // corners of the image. You can find and create appropriate values at
            // http://maps.nypl.org/warper/ or
            // http://www.georeferencer.org/
            var imageBounds;
            if (!_.isEmpty(locations)) {
                imageBounds = L.latLngBounds([
                    locations.upperLeft,
                    locations.lowerLeft,
                    locations.upperRight,
                    locations.lowerRight
                ]);
            }
            var latlngs;
            if ($scope.cadLineDetails && !_.isEmpty($scope.cadLineDetails.points)) {
                latlngs = [
                    $scope.cadLineDetails.points[0]
                ];
            }
            var map = L.mapbox.map('map', 'mapbox.streets', {
                    infoControl: false,
                    attributionControl: false,
                    maxZoom: zoomLevel[1],
                    minZoom: zoomLevel[0]
                })
                .fitBounds(imageBounds)
            var attribution = L.control.attribution();
            attribution.setPrefix('<a href="https://cloud.unifli.aero/">Unifli</a>');
            // attribution.addAttribution('<a href="https://unifli.aero/">Unifli</a>');
            attribution.addTo(map);
            // See full documentation for the ImageOverlay type:
            // http://leafletjs.com/reference.html#imageoverlay
            // console.log("gccygeruygreufheurhfuerhuerhfurhrieowuepoupwoidpiwodwoeudiewudieuifueiuferfureruhsss", $scope.slider.value);
            if ($scope.cadLineDetails && !_.isEmpty($scope.cadLineDetails.geoLocation) && !$scope.cadLineDetails.mission) {
                var overlay = L.imageOverlay(imageUrl, imageBounds)
                    .addTo(map);
            }
            // overlay.setOpacity($scope.slider.value);
            // omnivore.kml('http://localhost:1337/newM_mosaic.kml').addTo(map);
                var TopoLayer = L.tileLayer(imageUrl, {
                    maxZoom: zoomLevel[1],
                    minZoom: zoomLevel[0],
                    myY: function (data) {
                        return (Math.pow(2, data.z) - data.y - 1);
                    }
                })
                map.addLayer(TopoLayer);
            // $rootScope.$on('greeting', function (event, arg) {
            //     overlay.setOpacity(arg.value);
            // })
            var polygon;
            if ($scope.cadLineDetails && !_.isEmpty($scope.cadLineDetails.points)) {
                polygon = L.polygon(latlngs, {
                    color: 'white'
                }).addTo(map);
                map.fitBounds(polygon.getBounds());
            }

            var featureGroup = L.featureGroup().addTo(map);

            var drawControl = new L.Control.Draw({
                edit: {
                    featureGroup: featureGroup
                },
                draw: {
                    polygon: {
                        showArea: true,
                        allowIntersection: true,
                        shapeOptions: {
                            stroke: true,
                            metric: false,
                            color: '#fff',
                            weight: 4,
                            opacity: 1,
                            fill: true,
                            fillColor: null, //same as color by default
                            fillOpacity: 0.3
                        }
                    },
                    polyline: false,
                    rectangle: false,
                    circle: false,
                    marker: false
                }
            }).addTo(map);

            map.on('draw:created', showPolygonArea);
            map.on('draw:edited', showPolygonAreaEdited);

            function showPolygonAreaEdited(e) {
                e.layers.eachLayer(function (layer) {
                    showPolygonArea({
                        layer: layer
                    });
                });
            }
            var acres;

            function showPolygonArea(e) {
                featureGroup.clearLayers();
                featureGroup.addLayer(e.layer);
                var type = e.layerType;
                var layer = e.layer;
                layer.getLatLngs()[0][layer.getLatLngs()[0].length] = layer.getLatLngs()[0][0]
                console.log("e.layer", layer);
                var pointsList = [];

                _.forEach(e.layer._latlngs[0], function (val) {
                    var latLng = [];
                    latLng.push(val.lat);
                    latLng.push(val.lng)
                    console.log("val--", latLng);
                    pointsList.push(latLng);
                });
                console.log("pointsList", pointsList);
                var polygon = turf.polygon([
                    pointsList
                ]);

               
                var answer = document.getElementById('calculated-area');
                if (polygon.geometry.coordinates.length > 0) {
                    area = turf.area(polygon);
                    console.log("area--",polygon, area, LGeo.area(e.layer) * 0.0002471054);
                    acres = LGeo.area(e.layer) * 0.0002471054;
                    console.log("acres--", Number(acres).toFixed(2));
                  
                    answer.innerHTML = '<p><strong>' +  Number(acres).toFixed(2)+ '</strong> square meters</p>';
                } else {
                    answer.innerHTML = '';
                    if (e.type !== 'draw.delete') alert("Use the draw tools to draw a polygon!");
                }
            }

            map.on('load', function () {
                // ALL YOUR APPLICATION CODE
                slider.addEventListener('input', function (e) {
                    // Adjust the layers opacity. layer here is arbitrary - this could
                    // be another layer name found in your style or a custom layer
                    // added on the fly using `addSource`.
                    map.setPaintProperty('chicago', 'raster-opacity', parseInt(e.target.value, 10) / 100);

                    // Value indicator
                    sliderValue.textContent = e.target.value + '%';
                });
                console.log("hi,its loaded");
            });
        }
    };
});

//number format
firstapp.directive('phoneInput', function ($filter, $browser) {
    return {
        require: 'ngModel',
        link: function ($scope, $element, $attrs, ngModelCtrl) {
            var listener = function () {
                var value = $element.val().replace(/[^0-9]/g, '');
                $element.val($filter('tel')(value, false));
            };

            // This runs when we update the text field
            ngModelCtrl.$parsers.push(function (viewValue) {
                return viewValue.replace(/[^0-9]/g, '').slice(0, 10);
            });

            // This runs when the model gets updated on the scope directly and keeps our view in sync
            ngModelCtrl.$render = function () {
                $element.val($filter('tel')(ngModelCtrl.$viewValue, false));
            };

            $element.bind('change', listener);
            $element.bind('keydown', function (event) {
                var key = event.keyCode;
                // If the keys include the CTRL, SHIFT, ALT, or META keys, or the arrow keys, do nothing.
                // This lets us support copy and paste too
                if (key == 91 || (15 < key && key < 19) || (37 <= key && key <= 40)) {
                    return;
                }
                $browser.defer(listener); // Have to do this or changes don't get picked up properly
            });

            $element.bind('paste cut', function () {
                $browser.defer(listener);
            });
        }

    };
});
firstapp.filter('tel', function () {
    return function (tel) {
        console.log(tel);
        if (!tel) {
            return '';
        }

        var value = tel.toString().trim().replace(/^\+/, '');

        if (value.match(/[^0-9]/)) {
            return tel;
        }

        var country, city, number;

        switch (value.length) {
            case 1:
            case 2:
            case 3:
                city = value;
                break;

            default:
                city = value.slice(0, 3);
                number = value.slice(3);
        }
        if (number) {
            if (number.length > 3) {
                number = number.slice(0, 3) + '-' + number.slice(3, 7);
            } else {
                number = number;
            }
            return (city + "-" + number).trim();
        } else {
            return city;
        }

    };
});