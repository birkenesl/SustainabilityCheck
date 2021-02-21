var contextMenuItem = {
  "id": "getCheck",
  "title": "Get Sustainability Check",
  "contexts": ["selection"]

}

var msgs = []

function processSelection(text) {
  let str = text
  if (str.match(/cotton/i)) {
    msgs.push({title: "Cotton", message: "Sustainability Rating: 50%"})
  }

  if (str.match(/polyester/i)) {
    msgs.push({title: "Polyester", message: "Sustainability Rating: 60%"})
  }

  if (str.match(/modal/i)) {
    msgs.push({title: "Modal", message: "Sustainability Rating: 40%"})
  }

  if (str.match(/wool/i)) {
    msgs.push({title: "Wool", message: "Sustainability Rating: 20%"})
  }

  if (str.match(/nylon/i)) {
    msgs.push({title: "Nylon", message: "Sustainability Rating: 20%"})
  }

  if (str.match(/flax/i)) {
    msgs.push({title: "Flax", message: "Sustainability Rating: 80%"})
  }

  if (str.match(/hemp/i)) {
    msgs.push({title: "Hemp", message: "Sustainability Rating: 60%"})
  }

  if (str.match(/viscose/i)) {
    msgs.push({title: "Viscose", message: "Sustainability Rating: 40%"})
  }

  if (str.match(/spandex/i)) {
    msgs.push({title: "Spandex", message: "Sustainability Rating: 20%"})
  }



}


chrome.contextMenus.create(contextMenuItem)

chrome.contextMenus.onClicked.addListener(function(clickData) {

  if (clickData.menuItemId == "getCheck" && clickData.selectionText) {

    processSelection(clickData.selectionText)
    var notify = {



      type: 'list',
      iconUrl: './media/icon-128x128.png',
      title: 'Sustainability Check',
      message: "Test Message!",
      items: msgs

    }

    chrome.notifications.clear('sustainNotifs', function(bool) {

    })


    chrome.notifications.create('sustainNotifs', notify)
    msgs = []

  }



})
