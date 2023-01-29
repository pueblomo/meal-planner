migrate((db) => {
  const collection = new Collection({
    "id": "j45qwhgv5armqkx",
    "created": "2023-01-24 13:03:50.436Z",
    "updated": "2023-01-24 13:03:50.436Z",
    "name": "planned_recipes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "7shivema",
        "name": "recipeId",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "lrpt5jjp",
        "name": "week",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "0shfvq4t",
        "name": "day",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("j45qwhgv5armqkx");

  return dao.deleteCollection(collection);
})
