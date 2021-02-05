export default class kult4eActor extends Actor {
  
    async moveroll(movename){
    const actordata = this.data;
    let data = actordata.items.filter(function(item) {return item.name == movename} );
    const type = "active";
    const movetype = data[0].type;
    if (type == "passive")
    {alert("This ability is Passive");}
    else{
    const attr = data[0].data.attributemod;
    const successtext = data[0].data.completesuccess;
    const failuretext = data[0].data.failure;
    const partialsuccess = data[0].data.partialsuccess;
    const specialflag = data[0].data.specialflag;
    let harm = 0;
    if (movename == "Endure Injury"){
    let output = await new Promise(resolve => {
      new Dialog({
        title: "Endure Harm",
        content: `<label>How Much Harm Did You Suffer? </label><input id="harm_value" data-type="number" />`,
        default: 'one',
        buttons:{
              OK: {label: "Ok",
                callback: () => {
                      resolve({
                        "harm": document.getElementById("harm_value").value
                              })
                }
              }
            },
            default: "ok"
    
      }).render(true);
});
    harm = output.harm;
    console.log(harm);
}
    let mod = 0;
    if(attr != '') {
        mod = this.data.data[attr];
    }
    
    let stab = this.data.data.stability.value;
    let situation = parseInt(this.data.data.sitmod) + parseInt(this.data.data.forward);
    
    if (this.data.data.attributes.majorwound1 && this.data.data.attributes.majorwound1stabilized != "true")
    { situation -= 1;}
    if (this.data.data.attributes.criticalwound && this.data.data.attributes.criticalwoundstabilized != "true")
    { situation -= 1;}
    if (specialflag == 1 && stab > 2)
      {situation -= 1};
    if (movetype == "disadvantage" && stab > 0)
      {situation -= 1};
    if (movetype == "disadvantage" && stab > 2)
      {situation -= 1};
    if (specialflag == 1 && stab > 5)
      {situation -= 1};
    if (movetype == "disadvantage" && stab > 5)
      {situation -=1};
    if (specialflag == 2 && stab > 5)
      {situation += 1}; 
   

    let r = new Roll(`2d10 + ${mod} + ${situation} -${harm}`);
    r.roll()
    if (r.total >= 15)
    {ChatMessage.create({ content: "<div class='move-name'>" + movename + "</div> <div class = 'move-name'> Success! </div> <div class = 'move-result'>" + successtext + "</div> <div class = 'result-roll'> <div class='tooltip'>"  + r.total + "<span class='tooltiptext'> " + r.result + "</span></div></div>", speaker: ChatMessage.getSpeaker({alias: this.name})});
    }
    else if (r.total < 10)
    {ChatMessage.create({ content: "<div class='move-name'>" + movename + "</div> <div class = 'move-name'> Failure! </div> <div class = 'move-result'>" + failuretext + "</div> <div class = 'result-roll'> <div class='tooltip'>"  + r.total + "<span class='tooltiptext'> " + r.result + "</span></div></div>", speaker: ChatMessage.getSpeaker({alias: this.name})});
    }
    else
    {ChatMessage.create({ content: "<div class='move-name'>" + movename + "</div> <div class = 'move-name'> Partial Success! </div> <div class = 'move-result'>" + partialsuccess + "</div> <div class = 'result-roll'> <div class='tooltip'>"  + r.total + "<span class='tooltiptext'> " + r.result + "</span></div></div>", speaker: ChatMessage.getSpeaker({alias: this.name})});
    }}
        
      
    }

}
