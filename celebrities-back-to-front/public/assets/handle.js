let wrapper = document.getElementById("wrapper");

// Load data from db
window.onload = () => {
  readAllCardHandler(data => {
    if (data.length > 0) {
      loadAllCard(data);
    }
  })  
}

// ------------------------------------------------------------------------------------------------------------------------------------------

// ADD EVENT FOR EDIT AND ADD BUTTON
document.getElementById("edit-btn").addEventListener('click', (e) => {
  let eid =           document.getElementById("e-id");
  let ename =         document.getElementById("e-name");
  let eimage_url =    document.getElementById("e-image_url");
  let edescription =  document.getElementById("e-description");
  let notification = document.getElementById("edit-notification");
  
  readCardByIdHandler(eid.value, (data) => {
    if(data.length < 1){
      notification.textContent = "id not existed";
      e.target.preventDefault;
    } else {
      notification.textContent = "";
      let newData = {
        name: ename.value,
        image_url: eimage_url.value,
        description: edescription.value
      }

      updateCardHandler(eid.value, newData, data => {
        document.querySelector(`#post-${eid.value}`).previousSibling.textContent = ename.value;
        document.querySelector(`#post-${eid.value}`).previousSibling.previousSibling.setAttribute("src", eimage_url.value);
        document.querySelector(`#post-${eid.value}`).nextSibling.innerHTML = edescription.value.substring(0, 90) + '<span class="more-content">' + edescription.value.substring(90, edescription.value.length) + '</span>';
      })
    }
  })
})


document.getElementById("add-btn").addEventListener('click', (e) => {
  let name =        document.getElementById("a-name");
  let image_url =   document.getElementById("a-image_url");
  let description = document.getElementById("a-description");
  let notification = document.getElementById("add-notification");
  if (image_url.value != "" && name.value != "" && description.value != "") {
    notification.textContent = "";
    let newData = {
      name: name.value,
      image_url: image_url.value,
      description: description.value
    }
    name.value = "";
    image_url.value = "";
    description.value = "";
    createCardHandler(newData, data => {
      newData.id = data.insertId;
      wrapper.appendChild(createCard(newData))
    })
  } else{
    notification.textContent = "somethings is null";
    notification.style.color = "red";
    notification.display = "block";

    e.target.preventDefault;
  }
})

// ADD EVENT FOR CLEAR BUTTONS
let clearBtns = document.querySelectorAll(".rs-btn");
clearBtns.forEach(item => {
  item.addEventListener('click', (e) => {
    let parentId = e.target.parentNode.parentNode.getAttribute("id");
    let inputs = document.querySelectorAll(`#${parentId} input`);
    inputs.forEach(input => {
      input.value = "";
    });
    document.querySelector(`#${parentId} textarea`).value = "";
  })
});

// ------------------------------------------------------------------------------------------------------------------------------------------

// HELPER FUNCTION
// MARK: func createCard() => card_element
function createCard(item){
  let img = document.createElement('img');
  img.setAttribute('src', item.image_url);
  img.setAttribute('alt', 'image for celebrities');

  let h1 = document.createElement('h1');
  h1.textContent = item.name;

  let checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('class', 'read-more-state');
  checkbox.setAttribute('id', `post-${item.id}`);

  let p = document.createElement('p');
  p.setAttribute('class', 'content');
  p.innerHTML = item.description.substring(0, 90) + '<span class="more-content">' + item.description.substring(90, item.description.length) + '</span>';

  let label = document.createElement('label');
  label.setAttribute('class', 'read-more-trigger');
  label.setAttribute('for', `post-${item.id}`);

  let editBtn = document.createElement('button');
  editBtn.setAttribute('class', 'edit-btn');
  editBtn.textContent = "edit";
  editBtn.addEventListener('click', (e) => {
    let edit = document.getElementById("edit-menu");
    edit.style.height = "500px";
    edit.style.border = "1px solid #232323";
    edit.classList.add("clicked");
    window.scrollTo(0, 0);
    
    document.getElementById("e-image_url").value = e.target.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.getAttribute("src");
    document.getElementById("e-name").value = e.target.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.textContent;
    document.getElementById("e-description").value = e.target.parentNode.previousSibling.previousSibling.textContent;
    document.getElementById("e-id").value = e.target.parentNode.previousSibling.previousSibling.previousSibling.getAttribute("id").substring(5, 7);
  })


  let deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('class', 'delete-btn');
  deleteBtn.textContent = "delete";
  deleteBtn.addEventListener('click', (e) => {
    deleteCardHandler(item.id, (data) => {
      if (data != null) {
        console.log("delete success");
      }
    })
    // remove element from js
    wrapper.removeChild(e.target.parentNode.parentNode);
  })

  let buttons = document.createElement('div');
  buttons.setAttribute('class', 'buttons');
  buttons.appendChild(editBtn);
  buttons.appendChild(deleteBtn);

  let card = document.createElement('div');
  card.setAttribute('class', 'card');
  card.appendChild(img);
  card.appendChild(h1);
  card.appendChild(checkbox);
  card.appendChild(p);
  card.appendChild(label);
  card.appendChild(buttons);
  return card;
}

// MARK: loadAllCard(data) => card_element_array
function loadAllCard(data){
  data.forEach(item => {
    wrapper.appendChild(createCard(item));
  });
}

// MARK: toggleEditMenu() => show and hidden edit menu
function toggleEditMenu() {
  let parent = document.getElementById("edit-menu");
  if(parent.classList.contains("clicked")){
    parent.classList.remove("clicked");
    parent.style.height = "0px";
    parent.style.border = "0";
  }else{
    parent.classList.add("clicked");
    parent.style.height = "500px";
    parent.style.border = "1px solid #232323";
  }
}
