Feature: Comprobar las opciones del menu desplegable en base al rol
    La funcionalidad del aplicativo se encuentra vinculada al rol

Scenario Outline: Realizar login con rol "Ventas" muestra las opciones correspondientes al rol en el menú lateral
    Given me encuentro en la pantalla de inicio de sesión de BAPI
    When inicio sesion con usuario "<usuario>" y contraseña "<pass>"
    Then la aplicación muestra la pantalla principal 
    And el menú lateral muestra las siguientes opciones:
        | "ISDA Contracts"  |
        | "Contracts"       |
        | "Query Contracts" |
        | "Risks Dpt"       |

Examples:
   | rol    | usuario       | pass      |
   | ventas | VentasBancoA  | secret    |
   | ventas | VentasBancoB  | secret    |

Scenario Outline: Realizar login con rol "Riesgos" muestra las opciones correspondientes al rol en el menú lateral
    Given me encuentro en la pantalla de inicio de sesión de BAPI
    When inicio sesion con usuario "<usuario>" y contraseña "<pass>"
    Then la aplicación muestra la pantalla principal 
    And el menú lateral muestra las siguientes opciones:
        | "Tutorial"        |
        | "Risks Dpt"       |

Examples:
   | rol     | usuario        | pass      |
   | riesgos | RiesgosBancoA  | secret    |
   | riesgos | RiesgosBancoA  | secret    |


Scenario Outline: Realizar login con rol "Middle Office" muestra las opciones correspondientes al rol en el menú lateral
    Given me encuentro en la pantalla de inicio de sesión de BAPI
    When inicio sesion con usuario "<usuario>" y contraseña "<pass>"
    Then la aplicación muestra la pantalla principal 
    And el menú lateral muestra las siguientes opciones:
        | "Tutorial"        |
        | "Risks Dpt"       |

Examples:
   | rol          | usuario             | pass      |
   | middleoffice | MiddleOfficeBancoA  | secret    |
   | middleoffice | MiddleOfficeBancoB  | secret    |

#    | anything else! | Nope |