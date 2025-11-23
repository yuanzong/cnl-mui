import type { TextFieldProps } from '@mui/material';
import { Autocomplete, TextField } from '@mui/material';

interface Props
  extends Pick<
    TextFieldProps,
    | 'label'
    | 'margin'
    | 'placeholder'
    | 'size'
    | 'required'
    | 'style'
    | 'helperText'
    | 'fullWidth'
  > {
  defaultZone?: string | null;
  setTimezone: (zone: Zone) => void;
}

export interface Zone {
  tzCode: string;
  name: string;
}

export const zones: Zone[] = [
  {
    tzCode: 'Pacific/Midway',
    name: '(GMT-11:00) Midway',
  },
  {
    tzCode: 'Pacific/Niue',
    name: '(GMT-11:00) Alofi',
  },
  {
    tzCode: 'Pacific/Pago_Pago',
    name: '(GMT-11:00) Pago Pago, Tāfuna, Ta`ū, Taulaga',
  },
  {
    tzCode: 'America/Adak',
    name: '(GMT-10:00) Adak',
  },
  {
    tzCode: 'Pacific/Honolulu',
    name: '(GMT-10:00) Honolulu, East Honolulu, Pearl City, Hilo, Kailua',
  },
  {
    tzCode: 'Pacific/Rarotonga',
    name: '(GMT-10:00) Avarua',
  },
  {
    tzCode: 'Pacific/Tahiti',
    name: '(GMT-10:00) Faaa, Papeete, Punaauia, Pirae, Mahina',
  },
  {
    tzCode: 'Pacific/Marquesas',
    name: '(GMT-09:30) Taiohae',
  },
  {
    tzCode: 'America/Anchorage',
    name: '(GMT-09:00) Anchorage, Fairbanks, Eagle River, Badger, Knik-Fairview',
  },
  {
    tzCode: 'America/Juneau',
    name: '(GMT-09:00) Juneau',
  },
  {
    tzCode: 'America/Metlakatla',
    name: '(GMT-09:00) Metlakatla',
  },
  {
    tzCode: 'America/Nome',
    name: '(GMT-09:00) Nome',
  },
  {
    tzCode: 'America/Sitka',
    name: '(GMT-09:00) Sitka, Ketchikan',
  },
  {
    tzCode: 'America/Yakutat',
    name: '(GMT-09:00) Yakutat',
  },
  {
    tzCode: 'Pacific/Gambier',
    name: '(GMT-09:00) Gambier',
  },
  {
    tzCode: 'America/Los_Angeles',
    name: '(GMT-08:00) Los Angeles, San Diego, San Jose, San Francisco, Seattle',
  },
  {
    tzCode: 'America/Tijuana',
    name: '(GMT-08:00) Tijuana, Mexicali, Ensenada, Rosarito, Tecate',
  },
  {
    tzCode: 'America/Vancouver',
    name: '(GMT-08:00) Vancouver, Surrey, Okanagan, Victoria, Burnaby',
  },
  {
    tzCode: 'Pacific/Pitcairn',
    name: '(GMT-08:00) Adamstown',
  },
  {
    tzCode: 'America/Boise',
    name: '(GMT-07:00) Boise, Meridian, Nampa, Idaho Falls, Pocatello',
  },
  {
    tzCode: 'America/Cambridge_Bay',
    name: '(GMT-07:00) Cambridge Bay',
  },
  {
    tzCode: 'America/Chihuahua',
    name: '(GMT-07:00) Chihuahua, Ciudad Delicias, Cuauhtémoc, Parral, Nuevo Casas Grandes',
  },
  {
    tzCode: 'America/Creston',
    name: '(GMT-07:00) Creston',
  },
  {
    tzCode: 'America/Dawson',
    name: '(GMT-07:00) Dawson',
  },
  {
    tzCode: 'America/Dawson_Creek',
    name: '(GMT-07:00) Fort St. John, Dawson Creek',
  },
  {
    tzCode: 'America/Denver',
    name: '(GMT-07:00) Denver, El Paso, Albuquerque, Colorado Springs, Aurora',
  },
  {
    tzCode: 'America/Edmonton',
    name: '(GMT-07:00) Calgary, Edmonton, Fort McMurray, Red Deer, Lethbridge',
  },
  {
    tzCode: 'America/Fort_Nelson',
    name: '(GMT-07:00) Fort Nelson',
  },
  {
    tzCode: 'America/Hermosillo',
    name: '(GMT-07:00) Hermosillo, Ciudad Obregón, Nogales, San Luis Río Colorado, Navojoa',
  },
  {
    tzCode: 'America/Inuvik',
    name: '(GMT-07:00) Inuvik',
  },
  {
    tzCode: 'America/Mazatlan',
    name: '(GMT-07:00) Culiacán, Mazatlán, Tepic, Los Mochis, La Paz',
  },
  {
    tzCode: 'America/Ojinaga',
    name: '(GMT-07:00) Ciudad Juárez, Manuel Ojinaga, Ojinaga',
  },
  {
    tzCode: 'America/Phoenix',
    name: '(GMT-07:00) Phoenix, Tucson, Mesa, Chandler, Gilbert',
  },
  {
    tzCode: 'America/Whitehorse',
    name: '(GMT-07:00) Whitehorse',
  },
  {
    tzCode: 'America/Yellowknife',
    name: '(GMT-07:00) Yellowknife',
  },
  {
    tzCode: 'America/Bahia_Banderas',
    name: '(GMT-06:00) Mezcales, San Vicente, Bucerías, Valle de Banderas',
  },
  {
    tzCode: 'America/Belize',
    name: '(GMT-06:00) Belize City, San Ignacio, Orange Walk, Belmopan, Dangriga',
  },
  {
    tzCode: 'America/Chicago',
    name: '(GMT-06:00) Chicago, Houston, San Antonio, Dallas, Austin',
  },
  {
    tzCode: 'America/Costa_Rica',
    name: '(GMT-06:00) San José, Limón, San Francisco, Alajuela, Liberia',
  },
  {
    tzCode: 'America/El_Salvador',
    name: '(GMT-06:00) San Salvador, Soyapango, Santa Ana, San Miguel, Mejicanos',
  },
  {
    tzCode: 'America/Guatemala',
    name: '(GMT-06:00) Guatemala City, Mixco, Villa Nueva, Petapa, San Juan Sacatepéquez',
  },
  {
    tzCode: 'America/Indiana/Knox',
    name: '(GMT-06:00) Knox',
  },
  {
    tzCode: 'America/Indiana/Tell_City',
    name: '(GMT-06:00) Tell City',
  },
  {
    tzCode: 'America/Managua',
    name: '(GMT-06:00) Managua, León, Masaya, Chinandega, Matagalpa',
  },
  {
    tzCode: 'America/Matamoros',
    name: '(GMT-06:00) Reynosa, Heroica Matamoros, Nuevo Laredo, Piedras Negras, Ciudad Acuña',
  },
  {
    tzCode: 'America/Menominee',
    name: '(GMT-06:00) Menominee, Iron Mountain, Kingsford, Ironwood, Iron River',
  },
  {
    tzCode: 'America/Merida',
    name: '(GMT-06:00) Mérida, Campeche, Ciudad del Carmen, Kanasín, Valladolid',
  },
  {
    tzCode: 'America/Mexico_City',
    name: '(GMT-06:00) Mexico City, Iztapalapa, Ecatepec de Morelos, Guadalajara, Puebla',
  },
  {
    tzCode: 'America/Monterrey',
    name: '(GMT-06:00) Monterrey, Saltillo, Guadalupe, Torreón, Victoria de Durango',
  },
  {
    tzCode: 'America/North_Dakota/Beulah',
    name: '(GMT-06:00) Beulah',
  },
  {
    tzCode: 'America/North_Dakota/Center',
    name: '(GMT-06:00) Center',
  },
  {
    tzCode: 'America/North_Dakota/New_Salem',
    name: '(GMT-06:00) Mandan',
  },
  {
    tzCode: 'America/Rainy_River',
    name: '(GMT-06:00) Rainy River',
  },
  {
    tzCode: 'America/Rankin_Inlet',
    name: '(GMT-06:00) Rankin Inlet',
  },
  {
    tzCode: 'America/Regina',
    name: '(GMT-06:00) Saskatoon, Regina, Prince Albert, Moose Jaw, North Battleford',
  },
  {
    tzCode: 'America/Resolute',
    name: '(GMT-06:00) Resolute',
  },
  {
    tzCode: 'America/Swift_Current',
    name: '(GMT-06:00) Swift Current',
  },
  {
    tzCode: 'America/Tegucigalpa',
    name: '(GMT-06:00) Tegucigalpa, San Pedro Sula, Choloma, La Ceiba, El Progreso',
  },
  {
    tzCode: 'America/Winnipeg',
    name: '(GMT-06:00) Winnipeg, Brandon, Kenora, Portage la Prairie, Thompson',
  },
  {
    tzCode: 'Pacific/Easter',
    name: '(GMT-06:00) Easter',
  },
  {
    tzCode: 'Pacific/Galapagos',
    name: '(GMT-06:00) Puerto Ayora, Puerto Baquerizo Moreno',
  },
  {
    tzCode: 'America/Atikokan',
    name: '(GMT-05:00) Atikokan',
  },
  {
    tzCode: 'America/Bogota',
    name: '(GMT-05:00) Bogotá, Cali, Medellín, Barranquilla, Cartagena',
  },
  {
    tzCode: 'America/Cancun',
    name: '(GMT-05:00) Cancún, Chetumal, Playa del Carmen, Cozumel, Felipe Carrillo Puerto',
  },
  {
    tzCode: 'America/Cayman',
    name: '(GMT-05:00) George Town, West Bay, Bodden Town, East End, North Side',
  },
  {
    tzCode: 'America/Detroit',
    name: '(GMT-05:00) Detroit, Grand Rapids, Warren, Sterling Heights, Ann Arbor',
  },
  {
    tzCode: 'America/Eirunepe',
    name: '(GMT-05:00) Eirunepé, Benjamin Constant, Envira',
  },
  {
    tzCode: 'America/Grand_Turk',
    name: '(GMT-05:00) Cockburn Town',
  },
  {
    tzCode: 'America/Guayaquil',
    name: '(GMT-05:00) Guayaquil, Quito, Cuenca, Santo Domingo de los Colorados, Machala',
  },
  {
    tzCode: 'America/Havana',
    name: '(GMT-05:00) Havana, Santiago de Cuba, Camagüey, Holguín, Guantánamo',
  },
  {
    tzCode: 'America/Indiana/Indianapolis',
    name: '(GMT-05:00) Indianapolis, Fort Wayne, South Bend, Carmel, Bloomington',
  },
  {
    tzCode: 'America/Indiana/Marengo',
    name: '(GMT-05:00) Marengo',
  },
  {
    tzCode: 'America/Indiana/Petersburg',
    name: '(GMT-05:00) Petersburg',
  },
  {
    tzCode: 'America/Indiana/Vevay',
    name: '(GMT-05:00) Vevay',
  },
  {
    tzCode: 'America/Indiana/Vincennes',
    name: '(GMT-05:00) Vincennes, Jasper, Washington, Huntingburg',
  },
  {
    tzCode: 'America/Indiana/Winamac',
    name: '(GMT-05:00) Winamac',
  },
  {
    tzCode: 'America/Iqaluit',
    name: '(GMT-05:00) Iqaluit',
  },
  {
    tzCode: 'America/Jamaica',
    name: '(GMT-05:00) Kingston, New Kingston, Spanish Town, Portmore, Montego Bay',
  },
  {
    tzCode: 'America/Kentucky/Louisville',
    name: '(GMT-05:00) Louisville, Jeffersonville, New Albany, Jeffersontown, Pleasure Ridge Park',
  },
  {
    tzCode: 'America/Kentucky/Monticello',
    name: '(GMT-05:00) Monticello',
  },
  {
    tzCode: 'America/Lima',
    name: '(GMT-05:00) Lima, Arequipa, Callao, Trujillo, Chiclayo',
  },
  {
    tzCode: 'America/Nassau',
    name: '(GMT-05:00) Nassau, Lucaya, Freeport, West End, Cooper’s Town',
  },
  {
    tzCode: 'America/New_York',
    name: '(GMT-05:00) New York City, Brooklyn, Queens, Philadelphia, Manhattan',
  },
  {
    tzCode: 'America/Nipigon',
    name: '(GMT-05:00) Nipigon',
  },
  {
    tzCode: 'America/Panama',
    name: '(GMT-05:00) Panamá, San Miguelito, Juan Díaz, David, Arraiján',
  },
  {
    tzCode: 'America/Pangnirtung',
    name: '(GMT-05:00) Pangnirtung',
  },
  {
    tzCode: 'America/Port-au-Prince',
    name: '(GMT-05:00) Port-au-Prince, Carrefour, Delmas 73, Pétionville, Port-de-Paix',
  },
  {
    tzCode: 'America/Rio_Branco',
    name: '(GMT-05:00) Rio Branco, Cruzeiro do Sul, Sena Madureira, Tarauacá, Feijó',
  },
  {
    tzCode: 'America/Thunder_Bay',
    name: '(GMT-05:00) Thunder Bay',
  },
  {
    tzCode: 'America/Toronto',
    name: '(GMT-05:00) Toronto, Montréal, Ottawa, Mississauga, Québec',
  },
  {
    tzCode: 'America/Anguilla',
    name: '(GMT-04:00) The Valley, Blowing Point Village, Sandy Ground Village, The Quarter, Sandy Hill',
  },
  {
    tzCode: 'America/Antigua',
    name: '(GMT-04:00) Saint John’s, Piggotts, Bolands, Codrington, Parham',
  },
  {
    tzCode: 'America/Aruba',
    name: '(GMT-04:00) Oranjestad, Tanki Leendert, San Nicolas, Santa Cruz, Paradera',
  },
  {
    tzCode: 'America/Asuncion',
    name: '(GMT-04:00) Asunción, Ciudad del Este, San Lorenzo, Capiatá, Lambaré',
  },
  {
    tzCode: 'America/Barbados',
    name: '(GMT-04:00) Bridgetown, Speightstown, Oistins, Bathsheba, Holetown',
  },
  {
    tzCode: 'America/Blanc-Sablon',
    name: '(GMT-04:00) Lévis',
  },
  {
    tzCode: 'America/Boa_Vista',
    name: '(GMT-04:00) Boa Vista',
  },
  {
    tzCode: 'America/Campo_Grande',
    name: '(GMT-04:00) Campo Grande, Dourados, Corumbá, Três Lagoas, Ponta Porã',
  },
  {
    tzCode: 'America/Caracas',
    name: '(GMT-04:00) Caracas, Maracaibo, Maracay, Valencia, Barquisimeto',
  },
  {
    tzCode: 'America/Cuiaba',
    name: '(GMT-04:00) Cuiabá, Várzea Grande, Rondonópolis, Sinop, Barra do Garças',
  },
  {
    tzCode: 'America/Curacao',
    name: '(GMT-04:00) Willemstad, Sint Michiel Liber',
  },
  {
    tzCode: 'America/Dominica',
    name: '(GMT-04:00) Roseau, Portsmouth, Berekua, Saint Joseph, Wesley',
  },
  {
    tzCode: 'America/Glace_Bay',
    name: '(GMT-04:00) Sydney, Glace Bay, Sydney Mines',
  },
  {
    tzCode: 'America/Goose_Bay',
    name: '(GMT-04:00) Labrador City, Happy Valley-Goose Bay',
  },
  {
    tzCode: 'America/Grenada',
    name: "(GMT-04:00) Saint George's, Gouyave, Grenville, Victoria, Saint David’s",
  },
  {
    tzCode: 'America/Guadeloupe',
    name: '(GMT-04:00) Les Abymes, Baie-Mahault, Le Gosier, Petit-Bourg, Sainte-Anne',
  },
  {
    tzCode: 'America/Guyana',
    name: '(GMT-04:00) Georgetown, Linden, New Amsterdam, Anna Regina, Bartica',
  },
  {
    tzCode: 'America/Halifax',
    name: '(GMT-04:00) Halifax, Dartmouth, Charlottetown, Lower Sackville, Truro',
  },
  {
    tzCode: 'America/Kralendijk',
    name: '(GMT-04:00) Kralendijk, Oranjestad, The Bottom',
  },
  {
    tzCode: 'America/La_Paz',
    name: '(GMT-04:00) Santa Cruz de la Sierra, Cochabamba, La Paz, Sucre, Oruro',
  },
  {
    tzCode: 'America/Lower_Princes',
    name: '(GMT-04:00) Cul de Sac, Lower Prince’s Quarter, Koolbaai, Philipsburg',
  },
  {
    tzCode: 'America/Manaus',
    name: '(GMT-04:00) Manaus, Itacoatiara, Parintins, Manacapuru, Coari',
  },
  {
    tzCode: 'America/Marigot',
    name: '(GMT-04:00) Marigot',
  },
  {
    tzCode: 'America/Martinique',
    name: '(GMT-04:00) Fort-de-France, Le Lamentin, Le Robert, Sainte-Marie, Le François',
  },
  {
    tzCode: 'America/Moncton',
    name: '(GMT-04:00) Moncton, Saint John, Fredericton, Dieppe, Miramichi',
  },
  {
    tzCode: 'America/Montserrat',
    name: '(GMT-04:00) Brades, Saint Peters, Plymouth',
  },
  {
    tzCode: 'America/Porto_Velho',
    name: '(GMT-04:00) Porto Velho, Ji Paraná, Vilhena, Ariquemes, Cacoal',
  },
  {
    tzCode: 'America/Port_of_Spain',
    name: '(GMT-04:00) Chaguanas, Mon Repos, San Fernando, Port of Spain, Rio Claro',
  },
  {
    tzCode: 'America/Puerto_Rico',
    name: '(GMT-04:00) San Juan, Bayamón, Carolina, Ponce, Caguas',
  },
  {
    tzCode: 'America/Santiago',
    name: '(GMT-04:00) Santiago, Puente Alto, Antofagasta, Viña del Mar, Valparaíso',
  },
  {
    tzCode: 'America/Santo_Domingo',
    name: '(GMT-04:00) Santo Domingo, Santiago de los Caballeros, Santo Domingo Oeste, Santo Domingo Este, San Pedro de Macorís',
  },
  {
    tzCode: 'America/St_Barthelemy',
    name: '(GMT-04:00) Gustavia',
  },
  {
    tzCode: 'America/St_Kitts',
    name: '(GMT-04:00) Basseterre, Fig Tree, Market Shop, Saint Paul’s, Middle Island',
  },
  {
    tzCode: 'America/St_Lucia',
    name: '(GMT-04:00) Castries, Bisee, Vieux Fort, Micoud, Soufrière',
  },
  {
    tzCode: 'America/St_Thomas',
    name: '(GMT-04:00) Saint Croix, Charlotte Amalie, Cruz Bay',
  },
  {
    tzCode: 'America/St_Vincent',
    name: '(GMT-04:00) Kingstown, Kingstown Park, Georgetown, Barrouallie, Port Elizabeth',
  },
  {
    tzCode: 'America/Thule',
    name: '(GMT-04:00) Thule',
  },
  {
    tzCode: 'America/Tortola',
    name: '(GMT-04:00) Road Town',
  },
  {
    tzCode: 'Atlantic/Bermuda',
    name: '(GMT-04:00) Hamilton',
  },
  {
    tzCode: 'America/St_Johns',
    name: "(GMT-03:30) St. John's, Mount Pearl, Corner Brook, Conception Bay South, Bay Roberts",
  },
  {
    tzCode: 'America/Araguaina',
    name: '(GMT-03:00) Palmas, Araguaína, Gurupi, Miracema do Tocantins, Porto Franco',
  },
  {
    tzCode: 'America/Argentina/Buenos_Aires',
    name: '(GMT-03:00) Buenos Aires, La Plata, Mar del Plata, Morón, Bahía Blanca',
  },
  {
    tzCode: 'America/Argentina/Catamarca',
    name: '(GMT-03:00) San Fernando del Valle de Catamarca, Trelew, Puerto Madryn, Esquel, Rawson',
  },
  {
    tzCode: 'America/Argentina/Cordoba',
    name: '(GMT-03:00) Córdoba, Rosario, Santa Fe, Resistencia, Santiago del Estero',
  },
  {
    tzCode: 'America/Argentina/Jujuy',
    name: '(GMT-03:00) San Salvador de Jujuy, San Pedro de Jujuy, Libertador General San Martín, Palpalá, La Quiaca',
  },
  {
    tzCode: 'America/Argentina/La_Rioja',
    name: '(GMT-03:00) La Rioja, Chilecito, Arauco, Chamical',
  },
  {
    tzCode: 'America/Argentina/Mendoza',
    name: '(GMT-03:00) Mendoza, San Rafael, San Martín',
  },
  {
    tzCode: 'America/Argentina/Rio_Gallegos',
    name: '(GMT-03:00) Comodoro Rivadavia, Río Gallegos, Caleta Olivia, Pico Truncado, Puerto Deseado',
  },
  {
    tzCode: 'America/Argentina/Salta',
    name: '(GMT-03:00) Salta, Neuquén, Santa Rosa, San Carlos de Bariloche, Cipolletti',
  },
  {
    tzCode: 'America/Argentina/San_Juan',
    name: '(GMT-03:00) San Juan, Chimbas, Santa Lucía, Pocito, Caucete',
  },
  {
    tzCode: 'America/Argentina/San_Luis',
    name: '(GMT-03:00) San Luis, Villa Mercedes, La Punta, Merlo, Justo Daract',
  },
  {
    tzCode: 'America/Argentina/Tucuman',
    name: '(GMT-03:00) San Miguel de Tucumán, Yerba Buena, Tafí Viejo, Alderetes, Aguilares',
  },
  {
    tzCode: 'America/Argentina/Ushuaia',
    name: '(GMT-03:00) Ushuaia, Río Grande',
  },
  {
    tzCode: 'America/Bahia',
    name: '(GMT-03:00) Salvador, Feira de Santana, Vitória da Conquista, Itabuna, Camaçari',
  },
  {
    tzCode: 'America/Belem',
    name: '(GMT-03:00) Belém, Ananindeua, Macapá, Parauapebas, Marabá',
  },
  {
    tzCode: 'America/Cayenne',
    name: '(GMT-03:00) Cayenne, Matoury, Saint-Laurent-du-Maroni, Kourou, Rémire-Montjoly',
  },
  {
    tzCode: 'America/Fortaleza',
    name: '(GMT-03:00) Fortaleza, São Luís, Natal, Teresina, João Pessoa',
  },
  {
    tzCode: 'America/Godthab',
    name: '(GMT-03:00) Nuuk, Sisimiut, Ilulissat, Qaqortoq, Aasiaat',
  },
  {
    tzCode: 'America/Maceio',
    name: '(GMT-03:00) Maceió, Aracaju, Arapiraca, Nossa Senhora do Socorro, São Cristóvão',
  },
  {
    tzCode: 'America/Miquelon',
    name: '(GMT-03:00) Saint-Pierre, Miquelon',
  },
  {
    tzCode: 'America/Montevideo',
    name: '(GMT-03:00) Montevideo, Salto, Paysandú, Las Piedras, Rivera',
  },
  {
    tzCode: 'America/Paramaribo',
    name: '(GMT-03:00) Paramaribo, Lelydorp, Brokopondo, Nieuw Nickerie, Moengo',
  },
  {
    tzCode: 'America/Punta_Arenas',
    name: '(GMT-03:00) Punta Arenas, Puerto Natales',
  },
  {
    tzCode: 'America/Recife',
    name: '(GMT-03:00) Recife, Jaboatão, Jaboatão dos Guararapes, Olinda, Paulista',
  },
  {
    tzCode: 'America/Santarem',
    name: '(GMT-03:00) Santarém, Altamira, Itaituba, Oriximiná, Alenquer',
  },
  {
    tzCode: 'America/Sao_Paulo',
    name: '(GMT-03:00) São Paulo, Rio de Janeiro, Belo Horizonte, Brasília, Curitiba',
  },
  {
    tzCode: 'Antarctica/Palmer',
    name: '(GMT-03:00) Palmer',
  },
  {
    tzCode: 'Antarctica/Rothera',
    name: '(GMT-03:00) Rothera',
  },
  {
    tzCode: 'Atlantic/Stanley',
    name: '(GMT-03:00) Stanley',
  },
  {
    tzCode: 'America/Noronha',
    name: '(GMT-02:00) Itamaracá',
  },
  {
    tzCode: 'Atlantic/South_Georgia',
    name: '(GMT-02:00) Grytviken',
  },
  {
    tzCode: 'America/Scoresbysund',
    name: '(GMT-01:00) Scoresbysund',
  },
  {
    tzCode: 'Atlantic/Azores',
    name: '(GMT-01:00) Ponta Delgada, Lagoa, Angra do Heroísmo, Rosto de Cão, Rabo de Peixe',
  },
  {
    tzCode: 'Atlantic/Cape_Verde',
    name: '(GMT-01:00) Praia, Mindelo, Santa Maria, Cova Figueira, Santa Cruz',
  },
  {
    tzCode: 'Africa/Abidjan',
    name: '(GMT+00:00) Abidjan, Abobo, Bouaké, Daloa, San-Pédro',
  },
  {
    tzCode: 'Africa/Accra',
    name: '(GMT+00:00) Accra, Kumasi, Tamale, Takoradi, Atsiaman',
  },
  {
    tzCode: 'Africa/Bamako',
    name: '(GMT+00:00) Bamako, Sikasso, Mopti, Koutiala, Ségou',
  },
  {
    tzCode: 'Africa/Banjul',
    name: '(GMT+00:00) Serekunda, Brikama, Bakau, Banjul, Farafenni',
  },
  {
    tzCode: 'Africa/Bissau',
    name: '(GMT+00:00) Bissau, Bafatá, Gabú, Bissorã, Bolama',
  },
  {
    tzCode: 'Africa/Casablanca',
    name: '(GMT+00:00) Casablanca, Rabat, Fès, Sale, Marrakesh',
  },
  {
    tzCode: 'Africa/Conakry',
    name: '(GMT+00:00) Camayenne, Conakry, Nzérékoré, Kindia, Kankan',
  },
  {
    tzCode: 'Africa/Dakar',
    name: '(GMT+00:00) Dakar, Pikine, Touba, Thiès, Thiès Nones',
  },
  {
    tzCode: 'Africa/El_Aaiun',
    name: '(GMT+00:00) Laayoune, Dakhla, Laayoune Plage',
  },
  {
    tzCode: 'Africa/Freetown',
    name: '(GMT+00:00) Freetown, Bo, Kenema, Koidu, Makeni',
  },
  {
    tzCode: 'Africa/Lome',
    name: '(GMT+00:00) Lomé, Sokodé, Kara, Atakpamé, Kpalimé',
  },
  {
    tzCode: 'Africa/Monrovia',
    name: '(GMT+00:00) Monrovia, Gbarnga, Kakata, Bensonville, Harper',
  },
  {
    tzCode: 'Africa/Nouakchott',
    name: '(GMT+00:00) Nouakchott, Nouadhibou, Néma, Kaédi, Rosso',
  },
  {
    tzCode: 'Africa/Ouagadougou',
    name: '(GMT+00:00) Ouagadougou, Bobo-Dioulasso, Koudougou, Ouahigouya, Banfora',
  },
  {
    tzCode: 'Africa/Sao_Tome',
    name: '(GMT+00:00) São Tomé, Santo António',
  },
  {
    tzCode: 'America/Danmarkshavn',
    name: '(GMT+00:00) Danmarkshavn',
  },
  {
    tzCode: 'Antarctica/Troll',
    name: '(GMT+00:00) Troll',
  },
  {
    tzCode: 'Atlantic/Canary',
    name: '(GMT+00:00) Las Palmas de Gran Canaria, Santa Cruz de Tenerife, La Laguna, Telde, Arona',
  },
  {
    tzCode: 'Atlantic/Faroe',
    name: '(GMT+00:00) Tórshavn, Klaksvík, Fuglafjørður, Tvøroyri, Miðvágur',
  },
  {
    tzCode: 'Atlantic/Madeira',
    name: '(GMT+00:00) Funchal, Câmara de Lobos, São Martinho, Caniço, Machico',
  },
  {
    tzCode: 'Atlantic/Reykjavik',
    name: '(GMT+00:00) Reykjavík, Kópavogur, Hafnarfjörður, Akureyri, Garðabær',
  },
  {
    tzCode: 'Atlantic/St_Helena',
    name: '(GMT+00:00) Jamestown, Georgetown, Edinburgh of the Seven Seas',
  },
  {
    tzCode: 'Europe/Dublin',
    name: '(GMT+00:00) Dublin, Cork, Luimneach, Gaillimh, Tallaght',
  },
  {
    tzCode: 'Europe/Guernsey',
    name: '(GMT+00:00) Saint Peter Port, St Martin, Saint Sampson, St Anne, Saint Saviour',
  },
  {
    tzCode: 'Europe/Isle_of_Man',
    name: '(GMT+00:00) Douglas, Ramsey, Peel, Port Erin, Castletown',
  },
  {
    tzCode: 'Europe/Jersey',
    name: '(GMT+00:00) Saint Helier, Le Hocq',
  },
  {
    tzCode: 'Europe/Lisbon',
    name: '(GMT+00:00) Lisbon, Porto, Amadora, Braga, Setúbal',
  },
  {
    tzCode: 'Europe/London',
    name: '(GMT+00:00) London, Birmingham, Liverpool, Sheffield, Bristol',
  },
  {
    tzCode: 'Africa/Algiers',
    name: '(GMT+01:00) Algiers, Boumerdas, Oran, Tébessa, Constantine',
  },
  {
    tzCode: 'Africa/Bangui',
    name: '(GMT+01:00) Bangui, Bimbo, Mbaïki, Berbérati, Kaga Bandoro',
  },
  {
    tzCode: 'Africa/Brazzaville',
    name: '(GMT+01:00) Brazzaville, Pointe-Noire, Dolisie, Kayes, Owando',
  },
  {
    tzCode: 'Africa/Ceuta',
    name: '(GMT+01:00) Ceuta, Melilla',
  },
  {
    tzCode: 'Africa/Douala',
    name: '(GMT+01:00) Douala, Yaoundé, Garoua, Kousséri, Bamenda',
  },
  {
    tzCode: 'Africa/Kinshasa',
    name: '(GMT+01:00) Kinshasa, Masina, Kikwit, Mbandaka, Matadi',
  },
  {
    tzCode: 'Africa/Lagos',
    name: '(GMT+01:00) Lagos, Kano, Ibadan, Kaduna, Port Harcourt',
  },
  {
    tzCode: 'Africa/Libreville',
    name: '(GMT+01:00) Libreville, Port-Gentil, Franceville, Oyem, Moanda',
  },
  {
    tzCode: 'Africa/Luanda',
    name: '(GMT+01:00) Luanda, N’dalatando, Huambo, Lobito, Benguela',
  },
  {
    tzCode: 'Africa/Malabo',
    name: '(GMT+01:00) Bata, Malabo, Ebebiyin, Aconibe, Añisoc',
  },
  {
    tzCode: 'Africa/Ndjamena',
    name: "(GMT+01:00) N'Djamena, Moundou, Sarh, Abéché, Kelo",
  },
  {
    tzCode: 'Africa/Niamey',
    name: '(GMT+01:00) Niamey, Zinder, Maradi, Agadez, Alaghsas',
  },
  {
    tzCode: 'Africa/Porto-Novo',
    name: '(GMT+01:00) Cotonou, Abomey-Calavi, Djougou, Porto-Novo, Parakou',
  },
  {
    tzCode: 'Africa/Tunis',
    name: '(GMT+01:00) Tunis, Sfax, Sousse, Kairouan, Bizerte',
  },
  {
    tzCode: 'Africa/Windhoek',
    name: '(GMT+01:00) Windhoek, Rundu, Walvis Bay, Oshakati, Swakopmund',
  },
  {
    tzCode: 'Arctic/Longyearbyen',
    name: '(GMT+01:00) Longyearbyen, Olonkinbyen',
  },
  {
    tzCode: 'Europe/Amsterdam',
    name: '(GMT+01:00) Amsterdam, Rotterdam, The Hague, Utrecht, Eindhoven',
  },
  {
    tzCode: 'Europe/Andorra',
    name: '(GMT+01:00) Andorra la Vella, les Escaldes, Encamp, Sant Julià de Lòria, la Massana',
  },
  {
    tzCode: 'Europe/Belgrade',
    name: '(GMT+01:00) Belgrade, Pristina, Niš, Novi Sad, Prizren',
  },
  {
    tzCode: 'Europe/Berlin',
    name: '(GMT+01:00) Berlin, Hamburg, Munich, Köln, Frankfurt am Main',
  },
  {
    tzCode: 'Europe/Bratislava',
    name: '(GMT+01:00) Bratislava, Košice, Prešov, Nitra, Žilina',
  },
  {
    tzCode: 'Europe/Brussels',
    name: '(GMT+01:00) Brussels, Antwerpen, Gent, Charleroi, Liège',
  },
  {
    tzCode: 'Europe/Budapest',
    name: '(GMT+01:00) Budapest, Debrecen, Miskolc, Szeged, Pécs',
  },
  {
    tzCode: 'Europe/Copenhagen',
    name: '(GMT+01:00) Copenhagen, Århus, Odense, Aalborg, Frederiksberg',
  },
  {
    tzCode: 'Europe/Gibraltar',
    name: '(GMT+01:00) Gibraltar',
  },
  {
    tzCode: 'Europe/Ljubljana',
    name: '(GMT+01:00) Ljubljana, Maribor, Celje, Kranj, Velenje',
  },
  {
    tzCode: 'Europe/Luxembourg',
    name: '(GMT+01:00) Luxembourg, Esch-sur-Alzette, Dudelange, Schifflange, Bettembourg',
  },
  {
    tzCode: 'Europe/Madrid',
    name: '(GMT+01:00) Madrid, Barcelona, Valencia, Sevilla, Zaragoza',
  },
  {
    tzCode: 'Europe/Malta',
    name: '(GMT+01:00) Birkirkara, Qormi, Mosta, Żabbar, San Pawl il-Baħar',
  },
  {
    tzCode: 'Europe/Monaco',
    name: '(GMT+01:00) Monaco, Monte-Carlo, La Condamine',
  },
  {
    tzCode: 'Europe/Oslo',
    name: '(GMT+01:00) Oslo, Bergen, Trondheim, Stavanger, Drammen',
  },
  {
    tzCode: 'Europe/Paris',
    name: '(GMT+01:00) Paris, Marseille, Lyon, Toulouse, Nice',
  },
  {
    tzCode: 'Europe/Podgorica',
    name: '(GMT+01:00) Podgorica, Nikšić, Herceg Novi, Pljevlja, Budva',
  },
  {
    tzCode: 'Europe/Prague',
    name: '(GMT+01:00) Prague, Brno, Ostrava, Pilsen, Olomouc',
  },
  {
    tzCode: 'Europe/Rome',
    name: '(GMT+01:00) Rome, Milan, Naples, Turin, Palermo',
  },
  {
    tzCode: 'Europe/San_Marino',
    name: '(GMT+01:00) Serravalle, Borgo Maggiore, San Marino, Domagnano, Fiorentino',
  },
  {
    tzCode: 'Europe/Sarajevo',
    name: '(GMT+01:00) Sarajevo, Banja Luka, Zenica, Tuzla, Mostar',
  },
  {
    tzCode: 'Europe/Skopje',
    name: '(GMT+01:00) Skopje, Bitola, Kumanovo, Prilep, Tetovo',
  },
  {
    tzCode: 'Europe/Stockholm',
    name: '(GMT+01:00) Stockholm, Göteborg, Malmö, Uppsala, Sollentuna',
  },
  {
    tzCode: 'Europe/Tirane',
    name: '(GMT+01:00) Tirana, Durrës, Elbasan, Vlorë, Shkodër',
  },
  {
    tzCode: 'Europe/Vaduz',
    name: '(GMT+01:00) Schaan, Vaduz, Triesen, Balzers, Eschen',
  },
  {
    tzCode: 'Europe/Vatican',
    name: '(GMT+01:00) Vatican City',
  },
  {
    tzCode: 'Europe/Vienna',
    name: '(GMT+01:00) Vienna, Graz, Linz, Favoriten, Donaustadt',
  },
  {
    tzCode: 'Europe/Warsaw',
    name: '(GMT+01:00) Warsaw, Łódź, Kraków, Wrocław, Poznań',
  },
  {
    tzCode: 'Europe/Zagreb',
    name: '(GMT+01:00) Zagreb, Split, Rijeka, Osijek, Zadar',
  },
  {
    tzCode: 'Europe/Zurich',
    name: '(GMT+01:00) Zürich, Genève, Basel, Lausanne, Bern',
  },
  {
    tzCode: 'Africa/Blantyre',
    name: '(GMT+02:00) Lilongwe, Blantyre, Mzuzu, Zomba, Kasungu',
  },
  {
    tzCode: 'Africa/Bujumbura',
    name: '(GMT+02:00) Bujumbura, Muyinga, Gitega, Ruyigi, Ngozi',
  },
  {
    tzCode: 'Africa/Cairo',
    name: '(GMT+02:00) Cairo, Alexandria, Giza, Port Said, Suez',
  },
  {
    tzCode: 'Africa/Gaborone',
    name: '(GMT+02:00) Gaborone, Francistown, Molepolole, Selebi-Phikwe, Maun',
  },
  {
    tzCode: 'Africa/Harare',
    name: '(GMT+02:00) Harare, Bulawayo, Chitungwiza, Mutare, Gweru',
  },
  {
    tzCode: 'Africa/Johannesburg',
    name: '(GMT+02:00) Cape Town, Durban, Johannesburg, Soweto, Pretoria',
  },
  {
    tzCode: 'Africa/Juba',
    name: '(GMT+02:00) Juba, Winejok, Malakal, Wau, Kuacjok',
  },
  {
    tzCode: 'Africa/Khartoum',
    name: '(GMT+02:00) Khartoum, Omdurman, Nyala, Port Sudan, Kassala',
  },
  {
    tzCode: 'Africa/Kigali',
    name: '(GMT+02:00) Kigali, Butare, Gitarama, Musanze, Gisenyi',
  },
  {
    tzCode: 'Africa/Lubumbashi',
    name: '(GMT+02:00) Lubumbashi, Mbuji-Mayi, Kisangani, Kananga, Likasi',
  },
  {
    tzCode: 'Africa/Lusaka',
    name: '(GMT+02:00) Lusaka, Kitwe, Ndola, Kabwe, Chingola',
  },
  {
    tzCode: 'Africa/Maputo',
    name: '(GMT+02:00) Maputo, Matola, Beira, Nampula, Chimoio',
  },
  {
    tzCode: 'Africa/Maseru',
    name: '(GMT+02:00) Maseru, Mafeteng, Leribe, Maputsoe, Mohale’s Hoek',
  },
  {
    tzCode: 'Africa/Mbabane',
    name: '(GMT+02:00) Manzini, Mbabane, Big Bend, Malkerns, Nhlangano',
  },
  {
    tzCode: 'Africa/Tripoli',
    name: '(GMT+02:00) Tripoli, Benghazi, Mişrātah, Tarhuna, Al Khums',
  },
  {
    tzCode: 'Asia/Amman',
    name: '(GMT+02:00) Amman, Zarqa, Irbid, Russeifa, Wādī as Sīr',
  },
  {
    tzCode: 'Asia/Beirut',
    name: '(GMT+02:00) Beirut, Ra’s Bayrūt, Tripoli, Sidon, Tyre',
  },
  {
    tzCode: 'Asia/Damascus',
    name: '(GMT+02:00) Aleppo, Damascus, Homs, Ḩamāh, Latakia',
  },
  {
    tzCode: 'Asia/Famagusta',
    name: '(GMT+02:00) Famagusta, Kyrenia, Protaras, Paralímni, Lápithos',
  },
  {
    tzCode: 'Asia/Gaza',
    name: '(GMT+02:00) Gaza, Khān Yūnis, Jabālyā, Rafaḩ, Dayr al Balaḩ',
  },
  {
    tzCode: 'Asia/Hebron',
    name: '(GMT+02:00) East Jerusalem, Hebron, Nablus, Battir, Ţūlkarm',
  },
  {
    tzCode: 'Asia/Jerusalem',
    name: '(GMT+02:00) Jerusalem, Tel Aviv, West Jerusalem, Haifa, Ashdod',
  },
  {
    tzCode: 'Asia/Nicosia',
    name: '(GMT+02:00) Nicosia, Limassol, Larnaca, Stróvolos, Paphos',
  },
  {
    tzCode: 'Europe/Athens',
    name: '(GMT+02:00) Athens, Thessaloníki, Pátra, Piraeus, Lárisa',
  },
  {
    tzCode: 'Europe/Bucharest',
    name: '(GMT+02:00) Bucharest, Sector 3, Sector 6, Sector 2, Iaşi',
  },
  {
    tzCode: 'Europe/Chisinau',
    name: '(GMT+02:00) Chisinau, Tiraspol, Bălţi, Bender, Rîbniţa',
  },
  {
    tzCode: 'Europe/Helsinki',
    name: '(GMT+02:00) Helsinki, Espoo, Tampere, Vantaa, Turku',
  },
  {
    tzCode: 'Europe/Kaliningrad',
    name: '(GMT+02:00) Kaliningrad, Chernyakhovsk, Sovetsk, Baltiysk, Gusev',
  },
  {
    tzCode: 'Europe/Kyiv',
    name: '(GMT+02:00) Kyiv, Kharkiv, Donetsk, Odesa, Dnipro',
  },
  {
    tzCode: 'Europe/Mariehamn',
    name: '(GMT+02:00) Mariehamn',
  },
  {
    tzCode: 'Europe/Riga',
    name: '(GMT+02:00) Riga, Daugavpils, Liepāja, Jelgava, Jūrmala',
  },
  {
    tzCode: 'Europe/Sofia',
    name: '(GMT+02:00) Sofia, Plovdiv, Varna, Burgas, Ruse',
  },
  {
    tzCode: 'Europe/Tallinn',
    name: '(GMT+02:00) Tallinn, Tartu, Narva, Kohtla-Järve, Pärnu',
  },
  {
    tzCode: 'Europe/Uzhgorod',
    name: '(GMT+02:00) Uzhgorod, Mukachevo, Khust, Berehove, Tyachiv',
  },
  {
    tzCode: 'Europe/Vilnius',
    name: '(GMT+02:00) Vilnius, Kaunas, Klaipėda, Šiauliai, Panevėžys',
  },
  {
    tzCode: 'Africa/Addis_Ababa',
    name: "(GMT+03:00) Addis Ababa, Dire Dawa, Mek'ele, Nazrēt, Bahir Dar",
  },
  {
    tzCode: 'Africa/Asmara',
    name: '(GMT+03:00) Asmara, Keren, Massawa, Assab, Mendefera',
  },
  {
    tzCode: 'Africa/Dar_es_Salaam',
    name: '(GMT+03:00) Dar es Salaam, Mwanza, Zanzibar, Arusha, Mbeya',
  },
  {
    tzCode: 'Africa/Djibouti',
    name: "(GMT+03:00) Djibouti, 'Ali Sabieh, Tadjourah, Obock, Dikhil",
  },
  {
    tzCode: 'Africa/Kampala',
    name: '(GMT+03:00) Kampala, Gulu, Lira, Mbarara, Jinja',
  },
  {
    tzCode: 'Africa/Mogadishu',
    name: '(GMT+03:00) Mogadishu, Hargeysa, Berbera, Kismayo, Marka',
  },
  {
    tzCode: 'Africa/Nairobi',
    name: '(GMT+03:00) Nairobi, Mombasa, Nakuru, Eldoret, Kisumu',
  },
  {
    tzCode: 'Antarctica/Syowa',
    name: '(GMT+03:00) Syowa',
  },
  {
    tzCode: 'Asia/Aden',
    name: '(GMT+03:00) Sanaa, Al Ḩudaydah, Taiz, Aden, Mukalla',
  },
  {
    tzCode: 'Asia/Baghdad',
    name: '(GMT+03:00) Baghdad, Basrah, Al Mawşil al Jadīdah, Al Başrah al Qadīmah, Mosul',
  },
  {
    tzCode: 'Asia/Bahrain',
    name: '(GMT+03:00) Manama, Al Muharraq, Ar Rifā‘, Dār Kulayb, Madīnat Ḩamad',
  },
  {
    tzCode: 'Asia/Kuwait',
    name: '(GMT+03:00) Al Aḩmadī, Ḩawallī, As Sālimīyah, Şabāḩ as Sālim, Al Farwānīyah',
  },
  {
    tzCode: 'Asia/Qatar',
    name: '(GMT+03:00) Doha, Ar Rayyān, Umm Şalāl Muḩammad, Al Wakrah, Al Khawr',
  },
  {
    tzCode: 'Asia/Riyadh',
    name: '(GMT+03:00) Riyadh, Jeddah, Mecca, Medina, Sulţānah',
  },
  {
    tzCode: 'Europe/Istanbul',
    name: '(GMT+03:00) Istanbul, Ankara, İzmir, Bursa, Adana',
  },
  {
    tzCode: 'Europe/Kirov',
    name: '(GMT+03:00) Kirov, Kirovo-Chepetsk, Vyatskiye Polyany, Slobodskoy, Kotel’nich',
  },
  {
    tzCode: 'Europe/Minsk',
    name: "(GMT+03:00) Minsk, Homyel', Mahilyow, Vitebsk, Hrodna",
  },
  {
    tzCode: 'Europe/Moscow',
    name: '(GMT+03:00) Moscow, Saint Petersburg, Nizhniy Novgorod, Kazan, Rostov-na-Donu',
  },
  {
    tzCode: 'Europe/Simferopol',
    name: '(GMT+03:00) Simferopol, Kerch, Yevpatoriya, Yalta, Feodosiya',
  },
  {
    tzCode: 'Europe/Volgograd',
    name: '(GMT+03:00) Volgograd, Volzhskiy, Kamyshin, Mikhaylovka, Uryupinsk',
  },
  {
    tzCode: 'Indian/Antananarivo',
    name: '(GMT+03:00) Antananarivo, Toamasina, Antsirabe, Fianarantsoa, Mahajanga',
  },
  {
    tzCode: 'Indian/Comoro',
    name: '(GMT+03:00) Moroni, Moutsamoudou, Fomboni, Domoni, Tsimbeo',
  },
  {
    tzCode: 'Indian/Mayotte',
    name: '(GMT+03:00) Mamoudzou, Koungou, Dzaoudzi, Dembeni, Sada',
  },
  {
    tzCode: 'Asia/Tehran',
    name: '(GMT+03:30) Tehran, Mashhad, Isfahan, Karaj, Tabriz',
  },
  {
    tzCode: 'Asia/Baku',
    name: '(GMT+04:00) Baku, Ganja, Sumqayıt, Lankaran, Yevlakh',
  },
  {
    tzCode: 'Asia/Dubai',
    name: '(GMT+04:00) Dubai, Sharjah, Abu Dhabi, Ajman City, Ras Al Khaimah City',
  },
  {
    tzCode: 'Asia/Muscat',
    name: '(GMT+04:00) Muscat, Seeb, Şalālah, Bawshar, Sohar',
  },
  {
    tzCode: 'Asia/Tbilisi',
    name: '(GMT+04:00) Tbilisi, Kutaisi, Batumi, Sokhumi, Zugdidi',
  },
  {
    tzCode: 'Asia/Yerevan',
    name: '(GMT+04:00) Yerevan, Gyumri, Vanadzor, Vagharshapat, Hrazdan',
  },
  {
    tzCode: 'Europe/Astrakhan',
    name: '(GMT+04:00) Astrakhan, Akhtubinsk, Znamensk, Kharabali, Kamyzyak',
  },
  {
    tzCode: 'Europe/Samara',
    name: '(GMT+04:00) Samara, Togliatti-on-the-Volga, Izhevsk, Syzran’, Novokuybyshevsk',
  },
  {
    tzCode: 'Europe/Saratov',
    name: '(GMT+04:00) Saratov, Balakovo, Engel’s, Balashov, Vol’sk',
  },
  {
    tzCode: 'Europe/Ulyanovsk',
    name: '(GMT+04:00) Ulyanovsk, Dimitrovgrad, Inza, Barysh, Novoul’yanovsk',
  },
  {
    tzCode: 'Indian/Mahe',
    name: '(GMT+04:00) Victoria, Anse Boileau, Bel Ombre, Beau Vallon, Cascade',
  },
  {
    tzCode: 'Indian/Mauritius',
    name: '(GMT+04:00) Port Louis, Beau Bassin-Rose Hill, Vacoas, Curepipe, Quatre Bornes',
  },
  {
    tzCode: 'Indian/Reunion',
    name: '(GMT+04:00) Saint-Denis, Saint-Paul, Saint-Pierre, Le Tampon, Saint-André',
  },
  {
    tzCode: 'Asia/Kabul',
    name: '(GMT+04:30) Kabul, Kandahār, Mazār-e Sharīf, Herāt, Jalālābād',
  },
  {
    tzCode: 'Antarctica/Mawson',
    name: '(GMT+05:00) Mawson',
  },
  {
    tzCode: 'Asia/Aqtau',
    name: '(GMT+05:00) Shevchenko, Zhanaozen, Beyneu, Shetpe, Yeraliyev',
  },
  {
    tzCode: 'Asia/Aqtobe',
    name: '(GMT+05:00) Aktobe, Kandyagash, Shalqar, Khromtau, Embi',
  },
  {
    tzCode: 'Asia/Ashgabat',
    name: '(GMT+05:00) Ashgabat, Türkmenabat, Daşoguz, Mary, Balkanabat',
  },
  {
    tzCode: 'Asia/Atyrau',
    name: '(GMT+05:00) Atyrau, Qulsary, Shalkar, Balykshi, Maqat',
  },
  {
    tzCode: 'Asia/Dushanbe',
    name: '(GMT+05:00) Dushanbe, Khujand, Kŭlob, Bokhtar, Istaravshan',
  },
  {
    tzCode: 'Asia/Karachi',
    name: '(GMT+05:00) Karachi, Lahore, Faisalabad, Rawalpindi, Multan',
  },
  {
    tzCode: 'Asia/Oral',
    name: '(GMT+05:00) Oral, Aqsay, Zhänibek, Tasqala, Zhumysker',
  },
  {
    tzCode: 'Asia/Qyzylorda',
    name: '(GMT+05:00) Kyzylorda, Baikonur, Novokazalinsk, Aral, Chiili',
  },
  {
    tzCode: 'Asia/Samarkand',
    name: '(GMT+05:00) Samarkand, Bukhara, Nukus, Qarshi, Jizzax',
  },
  {
    tzCode: 'Asia/Tashkent',
    name: '(GMT+05:00) Tashkent, Namangan, Andijon, Qo‘qon, Chirchiq',
  },
  {
    tzCode: 'Asia/Yekaterinburg',
    name: '(GMT+05:00) Yekaterinburg, Chelyabinsk, Ufa, Perm, Orenburg',
  },
  {
    tzCode: 'Indian/Kerguelen',
    name: '(GMT+05:00) Port-aux-Français',
  },
  {
    tzCode: 'Indian/Maldives',
    name: '(GMT+05:00) Male, Fuvahmulah, Hithadhoo, Kulhudhuffushi, Thinadhoo',
  },
  {
    tzCode: 'Asia/Colombo',
    name: '(GMT+05:30) Colombo, Dehiwala-Mount Lavinia, Moratuwa, Jaffna, Negombo',
  },
  {
    tzCode: 'Asia/Kolkata',
    name: '(GMT+05:30) Mumbai, Delhi, Bengaluru, Kolkata, Chennai',
  },
  {
    tzCode: 'Asia/Kathmandu',
    name: '(GMT+05:45) Kathmandu, Pokhara, Pātan, Biratnagar, Birgañj',
  },
  {
    tzCode: 'Antarctica/Vostok',
    name: '(GMT+06:00) Vostok',
  },
  {
    tzCode: 'Asia/Almaty',
    name: '(GMT+06:00) Almaty, Karagandy, Shymkent, Taraz, Nur-Sultan',
  },
  {
    tzCode: 'Asia/Bishkek',
    name: '(GMT+06:00) Bishkek, Osh, Jalal-Abad, Karakol, Tokmok',
  },
  {
    tzCode: 'Asia/Dhaka',
    name: '(GMT+06:00) Dhaka, Chattogram, Khulna, Rājshāhi, Comilla',
  },
  {
    tzCode: 'Asia/Omsk',
    name: '(GMT+06:00) Omsk, Tara, Kalachinsk, Znamenskoye, Tavricheskoye',
  },
  {
    tzCode: 'Asia/Qostanay',
    name: '(GMT+06:00) Kostanay, Rudnyy, Dzhetygara, Arkalyk, Lisakovsk',
  },
  {
    tzCode: 'Asia/Thimphu',
    name: '(GMT+06:00) himphu, Punākha, Tsirang, Phuntsholing, Pemagatshel',
  },
  {
    tzCode: 'Asia/Urumqi',
    name: '(GMT+06:00) Zhongshan, Ürümqi, Zhanjiang, Shihezi, Huocheng',
  },
  {
    tzCode: 'Indian/Chagos',
    name: '(GMT+06:00) British Indian Ocean Territory',
  },
  {
    tzCode: 'Asia/Yangon',
    name: '(GMT+06:30) Yangon, Mandalay, Nay Pyi Taw, Mawlamyine, Kyain Seikgyi Township',
  },
  {
    tzCode: 'Indian/Cocos',
    name: '(GMT+06:30) West Island',
  },
  {
    tzCode: 'Antarctica/Davis',
    name: '(GMT+07:00) Davis',
  },
  {
    tzCode: 'Asia/Bangkok',
    name: '(GMT+07:00) Bangkok, Hanoi, Haiphong, Samut Prakan, Mueang Nonthaburi',
  },
  {
    tzCode: 'Asia/Barnaul',
    name: '(GMT+07:00) Barnaul, Biysk, Rubtsovsk, Novoaltaysk, Gorno-Altaysk',
  },
  {
    tzCode: 'Asia/Hovd',
    name: '(GMT+07:00) Khovd, Ölgii, Ulaangom, Uliastay, Altai',
  },
  {
    tzCode: 'Asia/Ho_Chi_Minh',
    name: '(GMT+07:00) Ho Chi Minh City, Da Nang, Biên Hòa, Nha Trang, Cần Thơ',
  },
  {
    tzCode: 'Asia/Jakarta',
    name: '(GMT+07:00) Jakarta, Surabaya, Medan, Bandung, Bekasi',
  },
  {
    tzCode: 'Asia/Krasnoyarsk',
    name: '(GMT+07:00) Krasnoyarsk, Abakan, Norilsk, Achinsk, Kyzyl',
  },
  {
    tzCode: 'Asia/Novokuznetsk',
    name: '(GMT+07:00) Novokuznetsk, Kemerovo, Prokop’yevsk, Leninsk-Kuznetsky, Kiselëvsk',
  },
  {
    tzCode: 'Asia/Novosibirsk',
    name: '(GMT+07:00) Novosibirsk, Berdsk, Iskitim, Akademgorodok, Kuybyshev',
  },
  {
    tzCode: 'Asia/Phnom_Penh',
    name: '(GMT+07:00) Phnom Penh, Takeo, Sihanoukville, Battambang, Siem Reap',
  },
  {
    tzCode: 'Asia/Pontianak',
    name: '(GMT+07:00) Pontianak, Tanjung Pinang, Palangkaraya, Singkawang, Sampit',
  },
  {
    tzCode: 'Asia/Tomsk',
    name: '(GMT+07:00) Tomsk, Seversk, Strezhevoy, Kolpashevo, Asino',
  },
  {
    tzCode: 'Asia/Vientiane',
    name: '(GMT+07:00) Vientiane, Pakse, Thakhèk, Savannakhet, Luang Prabang',
  },
  {
    tzCode: 'Indian/Christmas',
    name: '(GMT+07:00) Flying Fish Cove',
  },
  {
    tzCode: 'Asia/Brunei',
    name: '(GMT+08:00) Bandar Seri Begawan, Kuala Belait, Seria, Tutong, Bangar',
  },
  {
    tzCode: 'Asia/Choibalsan',
    name: '(GMT+08:00) Baruun-Urt, Choibalsan',
  },
  {
    tzCode: 'Asia/Hong_Kong',
    name: '(GMT+08:00) Hong Kong, Kowloon, Tsuen Wan, Yuen Long Kau Hui, Tung Chung',
  },
  {
    tzCode: 'Asia/Irkutsk',
    name: '(GMT+08:00) Irkutsk, Ulan-Ude, Bratsk, Angarsk, Ust’-Ilimsk',
  },
  {
    tzCode: 'Asia/Kuala_Lumpur',
    name: '(GMT+08:00) Kota Bharu, Kuala Lumpur, Klang, Kampung Baru Subang, Johor Bahru',
  },
  {
    tzCode: 'Asia/Kuching',
    name: '(GMT+08:00) Kuching, Kota Kinabalu, Sandakan, Tawau, Miri',
  },
  {
    tzCode: 'Asia/Macau',
    name: '(GMT+08:00) Macau',
  },
  {
    tzCode: 'Asia/Makassar',
    name: '(GMT+08:00) Makassar, Denpasar, City of Balikpapan, Banjarmasin, Manado',
  },
  {
    tzCode: 'Asia/Manila',
    name: '(GMT+08:00) Quezon City, Manila, Caloocan City, Budta, Davao',
  },
  {
    tzCode: 'Asia/Shanghai',
    name: '(GMT+08:00) Shanghai, Beijing, Tianjin, Guangzhou, Shenzhen',
  },
  {
    tzCode: 'Asia/Singapore',
    name: '(GMT+08:00) Singapore, Woodlands',
  },
  {
    tzCode: 'Asia/Taipei',
    name: '(GMT+08:00) Taipei, Kaohsiung, Taichung, Tainan, Banqiao',
  },
  {
    tzCode: 'Asia/Ulaanbaatar',
    name: '(GMT+08:00) Ulan Bator, Erdenet, Darhan, Hovd, Mörön',
  },
  {
    tzCode: 'Australia/Perth',
    name: '(GMT+08:00) Perth, Rockingham, Mandurah, Bunbury, Albany',
  },
  {
    tzCode: 'Australia/Eucla',
    name: '(GMT+08:45) Eucla',
  },
  {
    tzCode: 'Asia/Chita',
    name: '(GMT+09:00) Chita, Krasnokamensk, Borzya, Petrovsk-Zabaykal’skiy, Aginskoye',
  },
  {
    tzCode: 'Asia/Dili',
    name: '(GMT+09:00) Dili, Maliana, Suai, Likisá, Aileu',
  },
  {
    tzCode: 'Asia/Jayapura',
    name: '(GMT+09:00) Ambon, Jayapura, Sorong, Ternate, Abepura',
  },
  {
    tzCode: 'Asia/Khandyga',
    name: '(GMT+09:00) Khandyga',
  },
  {
    tzCode: 'Asia/Pyongyang',
    name: '(GMT+09:00) Pyongyang, Hamhŭng, Namp’o, Sunch’ŏn, Hŭngnam',
  },
  {
    tzCode: 'Asia/Seoul',
    name: '(GMT+09:00) Seoul, Busan, Incheon, Daegu, Daejeon',
  },
  {
    tzCode: 'Asia/Tokyo',
    name: '(GMT+09:00) Tokyo, Yokohama, Osaka, Nagoya, Sapporo',
  },
  {
    tzCode: 'Asia/Yakutsk',
    name: '(GMT+09:00) Yakutsk, Blagoveshchensk, Belogorsk, Neryungri, Svobodnyy',
  },
  {
    tzCode: 'Pacific/Palau',
    name: '(GMT+09:00) Koror, Koror Town, Kloulklubed, Ulimang, Mengellang',
  },
  {
    tzCode: 'Australia/Adelaide',
    name: '(GMT+09:30) Adelaide, Adelaide Hills, Mount Gambier, Morphett Vale, Gawler',
  },
  {
    tzCode: 'Australia/Broken_Hill',
    name: '(GMT+09:30) Broken Hill',
  },
  {
    tzCode: 'Australia/Darwin',
    name: '(GMT+09:30) Darwin, Alice Springs, Palmerston, Howard Springs',
  },
  {
    tzCode: 'Antarctica/DumontDUrville',
    name: '(GMT+10:00) DumontDUrville',
  },
  {
    tzCode: 'Antarctica/Macquarie',
    name: '(GMT+10:00) Macquarie',
  },
  {
    tzCode: 'Asia/Ust-Nera',
    name: '(GMT+10:00) Ust-Nera',
  },
  {
    tzCode: 'Asia/Vladivostok',
    name: '(GMT+10:00) Vladivostok, Khabarovsk, Khabarovsk Vtoroy, Komsomolsk-on-Amur, Ussuriysk',
  },
  {
    tzCode: 'Australia/Brisbane',
    name: '(GMT+10:00) Brisbane, Gold Coast, Logan City, Townsville, Cairns',
  },
  {
    tzCode: 'Australia/Currie',
    name: '(GMT+10:00) Currie',
  },
  {
    tzCode: 'Australia/Hobart',
    name: '(GMT+10:00) Hobart, Launceston, Burnie, Devonport, Sandy Bay',
  },
  {
    tzCode: 'Australia/Lindeman',
    name: '(GMT+10:00) Lindeman',
  },
  {
    tzCode: 'Australia/Melbourne',
    name: '(GMT+10:00) Melbourne, Geelong, Bendigo, Ballarat, Melbourne City Centre',
  },
  {
    tzCode: 'Australia/Sydney',
    name: '(GMT+10:00) Sydney, Canberra, Newcastle, Wollongong, Maitland',
  },
  {
    tzCode: 'Pacific/Chuuk',
    name: '(GMT+10:00) Weno, Colonia',
  },
  {
    tzCode: 'Pacific/Guam',
    name: '(GMT+10:00) Dededo Village, Yigo Village, Tamuning, Tamuning-Tumon-Harmon Village, Mangilao Village',
  },
  {
    tzCode: 'Pacific/Port_Moresby',
    name: '(GMT+10:00) Port Moresby, Lae, Mount Hagen, Popondetta, Madang',
  },
  {
    tzCode: 'Pacific/Saipan',
    name: '(GMT+10:00) Saipan, San Jose Village',
  },
  {
    tzCode: 'Australia/Lord_Howe',
    name: '(GMT+10:30) Lord Howe',
  },
  {
    tzCode: 'Antarctica/Casey',
    name: '(GMT+11:00) Casey',
  },
  {
    tzCode: 'Asia/Magadan',
    name: '(GMT+11:00) Magadan, Ust-Nera, Susuman, Ola',
  },
  {
    tzCode: 'Asia/Sakhalin',
    name: '(GMT+11:00) Yuzhno-Sakhalinsk, Korsakov, Kholmsk, Okha, Nevel’sk',
  },
  {
    tzCode: 'Asia/Srednekolymsk',
    name: '(GMT+11:00) Srednekolymsk',
  },
  {
    tzCode: 'Pacific/Bougainville',
    name: '(GMT+11:00) Arawa, Buka',
  },
  {
    tzCode: 'Pacific/Efate',
    name: '(GMT+11:00) Port-Vila, Luganville, Isangel, Sola, Lakatoro',
  },
  {
    tzCode: 'Pacific/Guadalcanal',
    name: '(GMT+11:00) Honiara, Malango, Auki, Gizo, Buala',
  },
  {
    tzCode: 'Pacific/Kosrae',
    name: '(GMT+11:00) Tofol',
  },
  {
    tzCode: 'Pacific/Norfolk',
    name: '(GMT+11:00) Kingston',
  },
  {
    tzCode: 'Pacific/Noumea',
    name: '(GMT+11:00) Nouméa, Mont-Dore, Dumbéa, Païta, Wé',
  },
  {
    tzCode: 'Pacific/Pohnpei',
    name: '(GMT+11:00) Kolonia, Kolonia Town, Palikir - National Government Center',
  },
  {
    tzCode: 'Antarctica/McMurdo',
    name: '(GMT+12:00) McMurdo',
  },
  {
    tzCode: 'Asia/Anadyr',
    name: '(GMT+12:00) Anadyr, Bilibino',
  },
  {
    tzCode: 'Asia/Kamchatka',
    name: '(GMT+12:00) Petropavlovsk-Kamchatsky, Yelizovo, Vilyuchinsk, Klyuchi, Mil’kovo',
  },
  {
    tzCode: 'Pacific/Auckland',
    name: '(GMT+12:00) Auckland, Wellington, Christchurch, Manukau City, North Shore',
  },
  {
    tzCode: 'Pacific/Fiji',
    name: '(GMT+12:00) Suva, Lautoka, Nadi, Labasa, Ba',
  },
  {
    tzCode: 'Pacific/Funafuti',
    name: '(GMT+12:00) Funafuti, Savave Village, Tanrake Village, Toga Village, Asau Village',
  },
  {
    tzCode: 'Pacific/Kwajalein',
    name: '(GMT+12:00) Ebaye, Jabat',
  },
  {
    tzCode: 'Pacific/Majuro',
    name: '(GMT+12:00) Majuro, Arno, Jabor, Wotje, Mili',
  },
  {
    tzCode: 'Pacific/Nauru',
    name: '(GMT+12:00) Yaren, Baiti, Anabar, Uaboe, Ijuw',
  },
  {
    tzCode: 'Pacific/Tarawa',
    name: '(GMT+12:00) Tarawa, Betio Village, Bikenibeu Village',
  },
  {
    tzCode: 'Pacific/Wake',
    name: '(GMT+12:00) Wake',
  },
  {
    tzCode: 'Pacific/Wallis',
    name: '(GMT+12:00) Mata-Utu, Leava, Alo',
  },
  {
    tzCode: 'Pacific/Chatham',
    name: '(GMT+12:45) Waitangi',
  },
  {
    tzCode: 'Pacific/Apia',
    name: '(GMT+13:00) Apia, Asau, Mulifanua, Afega, Leulumoega',
  },
  {
    tzCode: 'Pacific/Enderbury',
    name: '(GMT+13:00) Enderbury',
  },
  {
    tzCode: 'Pacific/Fakaofo',
    name: '(GMT+13:00) Atafu Village, Nukunonu, Fale old settlement',
  },
  {
    tzCode: 'Pacific/Tongatapu',
    name: '(GMT+13:00) Nuku‘alofa, Lapaha, Neiafu, Pangai, ‘Ohonua',
  },
  {
    tzCode: 'Pacific/Kiritimati',
    name: '(GMT+14:00) Kiritimati',
  },
];

export function TimezonePicker({
  defaultZone,
  setTimezone,
  ...inputProps
}: Props) {
  if (!defaultZone) {
    defaultZone = 'America/Los_Angeles';
  }

  return (
    <Autocomplete
      disableClearable={true}
      multiple={false}
      defaultValue={zones.find((tz) => tz.tzCode === defaultZone)}
      options={zones}
      getOptionLabel={(option) => option.name}
      onChange={(_, option) => setTimezone(option)}
      fullWidth={true}
      renderInput={(params) => (
        <TextField label="Timezone" {...params} {...inputProps} />
      )}
    />
  );
}
