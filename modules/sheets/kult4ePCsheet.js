export default class kult4ePCsheet extends ActorSheet{
    get template(){
        return `systems/kult4e/templates/sheets/pc-sheet.hbs`;
    }

    getData(){
        const data = super.getData();
        data.moves = data.items.filter(function(item) {return item.type == "move" || "advantage" || "disadvantage" || "darksecret" || "relationship"} );
        console.log(data);
        return data;
    }


    activateListeners(html)
{
super.activateListeners(html)
    html.find('.item-delete').click(ev => {
    console.log(ev.currentTarget);
    let li = $(ev.currentTarget).parents(".item-name"),
    itemId = li.attr("data-item-id");
    console.log(li);
    console.log(`itemID =0 ${itemId}`);
    this.actor.deleteEmbeddedEntity("OwnedItem", itemId);
  });

  html.find('.item-edit').click(ev => {
    const li = $(ev.currentTarget).parents(".item-name");
    const item = this.actor.getOwnedItem(li.data("itemId"));
    item.sheet.render(true);
  });

  html.find('.stability-check').click(ev =>{
    stability();
  });

  html.find('.move-roll').click(ev =>{
    const li = $(ev.currentTarget).parents(".item-name");
    const item = this.actor.getOwnedItem(li.data("itemId"));
    console.log(item);
    this.actor.moveroll(item.data.name) });

  html.find('.stability-minus').click(ev =>{
    if (this.actor.data.data.stability.value < 9){
      let stability_current = Number(this.actor.data.data.stability.value);
      let stability_new = stability_current + 1;
      this.actor.update({'data.stability.value': stability_new});
      {ChatMessage.create({ content: `${this.actor.name} Took stability Damage`, speaker: ChatMessage.getSpeaker({alias: this.name})});
    }
  }
    });

    html.find('.stability-plus').click(ev =>{
      if (this.actor.data.data.stability.value > 0){
      let stability_current = Number(this.actor.data.data.stability.value);
      let stability_new = stability_current - 1;
      this.actor.update({'data.stability.value': stability_new});
      {ChatMessage.create({ content: `${this.actor.name} Regained Stability`, speaker: ChatMessage.getSpeaker({alias: this.name}) })};
      }
    });


}}
