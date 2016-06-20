/**
 * This file is part of agora-gui-common.
 * Copyright (C) 2015-2016  Agora Voting SL <agora@agoravoting.com>

 * agora-gui-common is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License.

 * agora-gui-common  is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.

 * You should have received a copy of the GNU Affero General Public License
 * along with agora-gui-common.  If not, see <http://www.gnu.org/licenses/>.
**/

/*
 * Simple error directive.
 */
angular.module('avUi')
  .directive('avSimpleError', function($resource, $window) {
    function link(scope, element, attrs) {
      // moves the title on top of the busy indicator
      scope.updateTitle = function() {
        var title = element.find(".av-simple-error-title");

        // set margin-top
        var marginTop = - title.height() - 45;
        var marginLeft = - title.width()/2;
        title.attr("style", "margin-top: " + marginTop + "px; margin-left: " + marginLeft + "px");
      };

      scope.$watch(attrs.title,
        function() {
          scope.updateTitle();
        }
      );
    }
    return {
      restrict: 'AE',
      scope: {},
      link: link,
      transclude: true,
      templateUrl: 'avUi/simple-error-directive/simple-error-directive.html'
    };
  });
