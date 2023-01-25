migrate((db) => {
  const collection = new Collection({
    "id": "qnh7q97paxg5mud",
    "created": "2023-01-26 10:49:00.179Z",
    "updated": "2023-01-26 10:49:00.179Z",
    "name": "planned_recipes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "fsuinvis",
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
        "id": "nvlzodls",
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
        "id": "tkikyw2c",
        "name": "day",
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
        "id": "klkhzgjs",
        "name": "user_id",
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
  const collection = dao.findCollectionByNameOrId("qnh7q97paxg5mud");

  return dao.deleteCollection(collection);
})
