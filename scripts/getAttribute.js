function getAttribute(){

    new Dialog({
        title: "Endure Harm",
        content: '<label>How much Harm did you suffer?</label><input id="harm_value" data-type="number"',
        default: 'one',
        buttons:{
              one: {label: "Ok",
                callback: () => {
                      resolve({
                        "harm_value": document.getElementById("harm_value").value

                      })
                }
                   }
            },
    
      }).render(true);
}