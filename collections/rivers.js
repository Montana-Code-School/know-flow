Globals.Rivers = new Mongo.Collection('rivers');

Globals.River = Astro.Class({
  name: 'River',
  collection: Rivers,
  fields: {
    name: {
      type: 'string',
      simpleValidator: 'required,notJustWhitespace,string'
    },

  }
});