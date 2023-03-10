export default {
  "swagger": "2.0",
  "info": {
    "description": "An intermediary REST API for apicollections.parismusees.paris.fr.<br>This API is intended to be simpler to use and to be limited to a list of artists and paintings.<br><br>In order to use this API, you will need a token from the ParisMusées API (more information here : https://www.parismuseescollections.paris.fr/fr/se-connecter-a-l-api).<br>Then, you can pass this token in the <code>auth-token</code> header.",
    "version": "0.1.0",
    "title": "ParisMusees"
  },
  "host": "parismusees-api.onrender.com",
  "basePath": "/v1",
  "tags": [
    {
      "name": "painting"
    },
    {
      "name": "artist"
    }
  ],
  "paths": {
    "/paintings": {
      "get": {
        "summary": "Get all paintings",
        "tags": [
          "painting"
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "type": "array"
            }
          }
        }
      }
    },
    "/paintings/{id}": {
      "get": {
        "summary": "Get details about a painting.",
        "tags": [
          "painting"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "path",
            "name": "id",
            "description": "Painting ID",
            "required": true,
            "type": "string",
            "example": "3ed35487-0e9b-4068-a10a-2a533cc25b82"
          }
        ],
        "security": [
          {
            "auth_token": []
          }
        ],
        "responses": {
          "200": {
            "description": "Successful operation",
            "schema": {
              "type": "object"
            }
          },
          "403": {
            "description": "Unauthorized"
          },
          "404": {
            "description": "Painting not found"
          }
        }
      }
    },
    "/paintings/sample/{size}": {
      "get": {
        "summary": "Get a random sample of paintings.",
        "tags": [
          "painting"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "path",
            "name": "size",
            "description": "Sample size",
            "required": true,
            "type": "integer",
            "example": 2
          }
        ],
        "responses": {
          "200": {
            "description": "Successful operation",
            "schema": {
              "type": "array"
            }
          },
          "400": {
            "description": "Invalid size parameter"
          }
        }
      }
    },
    "/artists": {
      "get": {
        "summary": "Get all artists.",
        "tags": [
          "artist"
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Successful operation",
            "schema": {
              "type": "array"
            }
          }
        }
      }
    },
    "/artists/sample/{size}": {
      "get": {
        "summary": "Get a random sample of artists.",
        "tags": [
          "artist"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "path",
            "name": "size",
            "description": "Sample size",
            "required": true,
            "type": "integer",
            "example": 2
          }
        ],
        "responses": {
          "200": {
            "description": "Successful operation",
            "schema": {
              "type": "array"
            }
          },
          "400": {
            "description": "Invalid size parameter"
          }
        }
      }
    },
    "/artists/{id}/paintings": {
      "get": {
        "summary": "Get all paintings of an artist.",
        "tags": [
          "artist",
          "painting"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "path",
            "name": "id",
            "description": "Artist ID",
            "required": true,
            "type": "integer",
            "example": 42468
          }
        ],
        "responses": {
          "200": {
            "description": "Successful operation",
            "schema": {
              "type": "array"
            }
          },
          "404": {
            "description": "Artist not found"
          }
        }
      }
    },
    "/artists/{id}/paintings/sample/{size}": {
      "get": {
        "summary": "Get a random sample of an artist paintings.",
        "tags": [
          "artist",
          "painting"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "path",
            "name": "id",
            "description": "Artist ID",
            "required": true,
            "type": "integer",
            "example": 42468
          },
          {
            "in": "path",
            "name": "size",
            "description": "Sample size",
            "required": true,
            "type": "integer",
            "example": 2
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "type": "array"
            }
          },
          "400": {
            "description": "Invalid size parameter"
          },
          "404": {
            "description": "Artist not found"
          }
        }
      }
    }
  },
  "securityDefinitions": {
    "auth_token": {
      "type": "apiKey",
      "name": "auth_token",
      "in": "header"
    }
  }
}