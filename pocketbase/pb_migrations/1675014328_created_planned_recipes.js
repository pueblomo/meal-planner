migrate((db) => {
  const collection = new Collection({
    "id": "l5wxkvafkwyv0ki",
    "created": "2023-01-29 17:45:28.876Z",
    "updated": "2023-01-29 17:45:28.876Z",
    "name": "planned_recipes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "u7qkx3pd",
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
        "id": "eckypdaf",
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
        "id": "poxy1fbx",
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
        "id": "wen83jdd",
        "name": "user_id",
        "type": "text",
        "required": false,
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
  const collection = dao.findCollectionByNameOrId("l5wxkvafkwyv0ki");

  return dao.deleteCollection(collection);
})
