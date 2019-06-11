import React, { PureComponent } from 'react';
import {Head, StyledSyntaxHighlighter, SubHead} from '../components/shared';
import { tomorrow } from 'react-syntax-highlighter/dist/styles/prism';

const code1 = `// creates a tree from a flat set of hierarchically related data
var MiracleGrow = function(treeData, key, parentKey)
{
    var keys = [];
    treeData.map(function(x){
        x.Children = [];
        keys.push(x[key]);
    });
    var roots = treeData.filter(function(x){return keys.indexOf(x[parentKey])==-1});
    var nodes = [];
    roots.map(function(x){nodes.push(x)});
    while(nodes.length > 0)
    {

        var node = nodes.pop();
        var children =  treeData.filter(function(x){return x[parentKey] == node[key]});
        children.map(function(x){
            node.Children.push(x);
            nodes.push(x)
        });
    }
    if (roots.length==1) return roots[0];
    return roots;
}


// demo/test data
var treeData = [
    {id:9, name:'Led Zep', parent:null},
    {id:10, name:'Jimmy', parent:9},
    {id:11, name:'Robert', parent:9},
    {id:12, name:'John', parent:9},

    {id:8, name:'Elec Gtr Strings', parent:5},
    {id:1, name:'Rush', parent:null},
    {id:2, name:'Alex', parent:1},
    {id:3, name:'Geddy', parent:1},
    {id:4, name:'Neil', parent:1},
    {id:5, name:'Gibson Les Paul', parent:2},
    {id:6, name:'Pearl Kit', parent:4},
    {id:7, name:'Rickenbacker', parent:3},

    {id:100, name:'Santa', parent:99},
    {id:101, name:'Elf', parent:100},
];
var root = MiracleGrow(treeData, "id", "parent")
console.log(root)
`;

const code2 = `(function () {
  advertiserApp
    .directive('areaIds', areaIds);
  
  function areaIds() {
    return {
      restrict: 'AE',
      scope: {
        ngModel: '=',
        required: '=',
        disabled: '=',
        placeholder: '@'
      },
      template: '<div>' +
        '<textarea style="resize: vertical; " class="form-control" placeholder="{{ placeholder }}"' +
        'rows="5" ng-model="model" ng-change="onchange($event)" ng-required="required" ng-disabled="disabled">' +
        '</textarea>' +
        '<span ng-if="note && !ngModel.length" class="no-fill">{{ note }}</span>' +
        '</div>',
      link: function (scope, el, attrs) {
        var lastValue = [];
        scope.note = attrs.note;
  
        scope.$watch('ngModel', function() {
          if (scope.ngModel && lastValue && scope.ngModel.join(' ') !== lastValue.join(' ')) {
            scope.model = scope.ngModel.join(', ');
          }
        });
  
        scope.onchange = function() {
          var regexp = /[^\\d\\s.,\\-_]/g; // только числа и допустимые разделители .,-_ а также пробел и перенос строки
  
          if (!scope.model) {
            scope.ngModel = [];
            return;
          }
  
          if (scope.model.match(regexp)) scope.model = scope.model.replace(regexp, '');
            scope.ngModel = setModelValue(scope.model);
            lastValue = scope.ngModel.slice();
          };
  
          function setModelValue(str) {
            var stringModel = str.replace(/[^0-9]{1,}/g, ' '); // все нечисла и множественные пробелы заменить на одиеночный пробел
            var model = [];
            stringModel.split(' ').forEach(function(item) {
              if (+item) model.push(+item);
            });
            return model;
          }  
        }
      };
    }
})();
`;

class NginxPage extends PureComponent {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <Head>Snippet</Head>
        <SubHead>Сформировать древовидную структуру из плоского массива (parent/child)</SubHead>
        <p>
          Возвращает один корень или массив корней, каждый из которых будет иметь свойство «Дети», содержащее связанные
          дочерние элементы. Не зависит от упорядоченного ввода, прилично компактно и не использует рекурсию.
        </p>
        <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
          {code1}
        </StyledSyntaxHighlighter>
        <SubHead>AngularJS компонент textarea для ввода ID</SubHead>
        <p>
          Айдишники можно вводить с различными разделителями - с новой строки, через запятую точку или тире, через нижнее подчеркивание.
          В результате в модель записывается массив чисел. Разрешен ввод только чисел и допустимых разделителей.
        </p>
        <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
          {code2}
        </StyledSyntaxHighlighter>
      </div>
    );
  }
}

export default NginxPage;