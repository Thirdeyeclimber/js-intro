var $boardContainer = document.querySelector('.container');

var board = new Board();

function handleListCreate() {
  var listTitle = prompt('New list title') || '';

  if (listTitle.trim()) {
    board.addList(listTitle);
    renderBoard();
  }
}

function handleCardCreate(event) {
	var $listContainer = event.target.parentNode;
	var listId = $listContainer.getAttribute('data-id');

	alert(`clicked list ${listId}`);
}

function renderBoard() {
  $boardContainer.innerHTML = '';

  board.lists.forEach(function(list) {
    var $listContainer = document.createElement('div');
    $listContainer.className = 'list';
    $listContainer.setAttribute('data-id', list.id);

    var $header = document.createElement('header');

    var $headerButton = document.createElement('button');
    $headerButton.textContent = list.title;
    
    var $addCardButton = document.createElement('button');
    $addCardButton.textContent = 'Add a card...';
    $addCardButton.addEventListener('click', handleCardCreate)

    $header.appendChild($headerButton);
    $listContainer.appendChild($header);
    $listContainer.appendChild($addCardButton);
    $boardContainer.appendChild($listContainer);
  });

  var $addListContainer = document.createElement('div');
  $addListContainer.className = 'list add';

  var $addListButton = document.createElement('button');
  $addListButton.textContent = '+ Add another list';
  $addListButton.addEventListener('click', handleListCreate);

  $addListContainer.appendChild($addListButton);
  $boardContainer.appendChild($addListContainer);
}

renderBoard();