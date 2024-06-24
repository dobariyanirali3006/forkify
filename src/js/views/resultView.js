import View from './view.js';
import previewView  from './previewView.js';
import icons from 'url:../../img/icons.svg';
class ResultView extends View {
  _parentElements = document.querySelector('.results');
  _errorMessage = 'No Recipes found for your query! Please try again :)';
  _message = '';


  _generateMarkup() {
    console.log(this._data);
    return this._data
    .map(result => previewView.render(result , false))
    .join('');
  }
}
export default new ResultView();
