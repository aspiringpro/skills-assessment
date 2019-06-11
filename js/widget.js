
const contactData = [
  {
    id: 0,
    name: "Christian",
    email: "christian@yahoo.com",
    phone: "325-555-1234",
    address: "6539 Wilton Ave. Spokane WA 90234",
    status: "available"
  },
  {
    id: 1,
    name: "Rich",
    email: "rich@tripod.com",
    phone: "323-555-1234",
    address: "6539 Wilton Ave. Spokane Valley WA CA 90234",
    status: "available"
  },
  {
    id: 2,
    name: "Scott",
    email: "scott@mailinator.com",
    phone: "323-555-1234",
    address: "6539 Wilton Ave. Liberty Lake WA 90234",
    status: "available"
  },
  {
    id: 3,
    name: "Danny",
    email: "danny@hotmail.com",
    phone: "323-555-1234",
    address: "6539 Wilton Ave. Seattle WA 90234",
    status: "available"
  },
  {
    id: 4,
    name: "Taka",
    email: "taka@myspace.com",
    phone: "323-555-1234",
    address: "6539 Wilton Ave. Tacoma WA 90234",
    status: "offline"
  },
  {
    id: 5,
    name: "Tim",
    email: "tim@netscape.com",
    phone: "323-555-1234",
    address: "6539 Wilton Ave. Olympia WA 90234",
    status: "busy"
  },
  {
    id: 6,
    name: "Patrick",
    email: "patrick@live.com",
    phone: "323-555-1234",
    address: "6539 Wilton Ave. Vancouver WA 90234",
    status: "available"
  },
  {
    id: 7,
    name: "Jacques",
    email: "jacques@aol.com",
    phone: "323-555-1234",
    address: "6539 Wilton Ave. Deer Park WA 90234",
    status: "busy"
  },
  {
    id: 8,
    name: "Marcus",
    email: "marcusjamesreed@gmail.com",
    phone: "213-555-1212",
    address: "123 A St. Coeur d'Alene, ID 83814",
    status: "busy"
  }
];


const list = document.getElementById("contact-list");

const loadWidget = () => {
  let select = document.getElementById("email-phone-select");
  select.onchange = () => {
    displayContacts(selectChoice());
  };

  document.onclick = (e) => {
    if (e.target.className !== "contact-name") {
      displayContacts(selectChoice());
    } else {
      displayContacts(parseInt(e.target.id));
    }
  };

  displayContacts(selectChoice());
}

const displayContacts = (mode) => {
  clearTable();

  contactData.forEach((contact) => {

    let row = document.createElement("div");
    row.className = "contact-row";

    let col1 = document.createElement("div");

    let statusDot = document.createElement("div");
    statusDot.className = contact.status;
    col1.appendChild(statusDot);

    let col1Text = document.createTextNode(contact.name);
    col1.appendChild(col1Text);

    col1.className = "contact-name";
    col1.id = contact.id;

    row.appendChild(col1);

    if (typeof mode === "number") {
      if (contact.id === mode) {
        row.appendChild(contactDetail(contact));
        col1.className = col1.className + " selected-contact";
      } else {
        row.className = row.className + " muted-contact";
      }
    }

    let col2 = document.createElement("div");
    mode === "email"
      ? (col2.innerText = contact.email)
      : (col2.innerText = contact.phone);

    col2.className = "col2";
    row.appendChild(col2);

    list.appendChild(row);
  });
}

const contactDetail = (contact) => {
  let detailBox = document.createElement("div");
  let col2 = document.createElement("div");
  detailBox.className = "info-container";
  let line1 = document.createElement("div");
  let a = document.createElement("a");
  let line2 = document.createElement("div");
  let line3 = document.createElement("div");

  a.href = "mailto:" + contact.email;
  a.innerText = contact.email;
  line1.appendChild(a);

  line2.innerText = contact.phone;
  line3.innerText = contact.address;

  line1.className = "contact-email contact-details";
  line2.className = "contact-details";
  line3.className = "contact-details";

  detailBox.appendChild(line1);
  detailBox.appendChild(line2);
  detailBox.appendChild(line3);

  detailBox.className = "detail-box";
  col2.appendChild(detailBox);

  return col2;
}

const selectChoice = () => {
  let select = document.getElementById("email-phone-select");
  return select.options[select.selectedIndex].value;
}

const clearTable = () => {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
}

loadWidget();
