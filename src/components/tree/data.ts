export default [
  {
    "rootNode": true,
    "nodeType": "variable",
    "id": "c98791b6-533f-4817-96ef-3f9bf26a2547",
    "condition": {
      "value": {
        "type": "express",
        "array": [
          {
            "type": "var",
            "value": "common|caseNumber|案件信息|案件编号"
          }
        ]
      }
    },
    "children": [
      {
        "variableValue": "common|caseNumber|案件信息|案件编号",
        "id": "2108bd2a-3b0f-4fc0-a2d1-80855c067859",
        "nodeType": "condition",
        "condition": {
          "type": "comparison",
          "value": {
            "type": "var",
            "value": "common|caseNumber|案件信息|案件编号"
          },
          "operator": "eq"
        },
        "from": "c98791b6-533f-4817-96ef-3f9bf26a2547",
        "children": [
          {
            "id": "f607fec5-c41b-43b6-93ef-f9bfce992435",
            "nodeType": "constant",
            "condition": {
              "value": {
                "type": "constant",
                "value": {
                  "a": "",
                  "b": ""
                }
              }
            },
            "from": "2108bd2a-3b0f-4fc0-a2d1-80855c067859"
          }
        ]
      },
      {
        "variableValue": "common|caseNumber|案件信息|案件编号",
        "id": "64b2caa8-bb26-47bb-b612-70a1db17f98e",
        "nodeType": "condition",
        "condition": {
          "type": "comparison",
          "value": {
            "type": "input",
            "value": "33"
          },
          "operator": "eq"
        },
        "from": "c98791b6-533f-4817-96ef-3f9bf26a2547",
        "children": [
          {
            "id": "7cb562ee-df0e-4603-a75d-28152c4f4444",
            "nodeType": "variable",
            "condition": {
              "value": {
                "type": "express",
                "array": [
                  {
                    "type": "var",
                    "value": "system|isBlack|系统变量|是否黑名单"
                  }
                ]
              }
            },
            "from": "64b2caa8-bb26-47bb-b612-70a1db17f98e",
            "children": [
              {
                "variableValue": "system|isBlack|系统变量|是否黑名单",
                "id": "f4db0895-093b-4eef-9b12-61d82fa3cf98",
                "nodeType": "condition",
                "condition": {
                  "type": "comparison",
                  "value": {
                    "type": "input",
                    "value": 1
                  },
                  "operator": "eq"
                },
                "from": "7cb562ee-df0e-4603-a75d-28152c4f4444",
                "children": [
                  {
                    "id": "ec34bc53-628f-4749-9e5f-8a80d0d276ef",
                    "nodeType": "constant",
                    "condition": {
                      "value": {
                        "type": "constant",
                        "value": {
                          "a": "",
                          "b": ""
                        }
                      }
                    },
                    "from": "f4db0895-093b-4eef-9b12-61d82fa3cf98"
                  }
                ]
              }
            ]
          },
          {
            "id": "71f07176-a4f8-48b9-9750-a82773b2f24e",
            "nodeType": "variable",
            "condition": {
              "value": {
                "type": "express",
                "array": [
                  {
                    "type": "var",
                    "value": "common|evidenceNumber|案件信息|借据编号"
                  }
                ]
              }
            },
            "from": "64b2caa8-bb26-47bb-b612-70a1db17f98e",
            "children": [
              {
                "variableValue": "common|evidenceNumber|案件信息|借据编号",
                "id": "59c07537-284f-4ee2-baff-58124b642d15",
                "nodeType": "condition",
                "condition": {
                  "type": "comparison",
                  "value": {
                    "type": "array",
                    "value": [
                      {
                        "type": "input",
                        "value": "12"
                      },
                      {
                        "type": "input",
                        "value": "33"
                      },
                      {
                        "type": "input",
                        "value": "22"
                      }
                    ]
                  },
                  "operator": "in"
                },
                "from": "71f07176-a4f8-48b9-9750-a82773b2f24e",
                "children": [
                  {
                    "id": "cef800b1-a3da-4d77-a5f8-1a4a1b48bb4d",
                    "nodeType": "constant",
                    "condition": {
                      "value": {
                        "type": "constant",
                        "value": {
                          "a": "",
                          "b": ""
                        }
                      }
                    },
                    "from": "59c07537-284f-4ee2-baff-58124b642d15"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "variableValue": "common|caseNumber|案件信息|案件编号",
        "id": "55c6bb6a-e7af-499d-89b1-163aa6e1b826",
        "nodeType": "condition",
        "condition": {
          "type": "comparison",
          "value": {
            "type": "array",
            "value": [
              {
                "type": "input",
                "value": "22"
              },
              {
                "type": "input",
                "value": "222"
              },
              {
                "type": "input",
                "value": "2222"
              }
            ]
          },
          "operator": "in"
        },
        "from": "c98791b6-533f-4817-96ef-3f9bf26a2547",
        "children": [
          {
            "id": "b581207e-54cf-41a2-b92c-c74babe3ce13",
            "nodeType": "constant",
            "condition": {
              "value": {
                "type": "constant",
                "value": {
                  "a": "",
                  "b": ""
                }
              }
            },
            "from": "55c6bb6a-e7af-499d-89b1-163aa6e1b826"
          }
        ]
      }
    ]
  }
];