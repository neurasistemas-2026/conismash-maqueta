/* Datos y funciones que comparten la web del cliente y el panel de Coni. */

/* ==== Datos de la prueba ==== */
const WHATSAPP = '5493402521435';
const DIRECCION = 'Necochea 315, Álvarez';
const MAPA = 'https://www.google.com/maps/search/?api=1&query=Necochea%20315%20%C3%81lvarez%20Santa%20Fe';
const ALIAS = 'conismash';
const TITULAR = 'Nicolas Ivan Ortega';

/* De ejemplo: los tiene que definir Nico. */
const ZONAS = [
  { nombre: 'Álvarez', envio: 1500 },
  { nombre: 'Piñero', envio: 3000 },
];
const EXTRAS = [
  { nombre: 'Cheddar extra', precio: 1000 },
  { nombre: 'Bacon', precio: 1500 },
  { nombre: 'Cebolla caramelizada', precio: 1000 },
  { nombre: 'Aros de cebolla', precio: 1500 },
  { nombre: 'Pepinillos', precio: 800 },
];
const EXTRAS_VEGGIE = EXTRAS.filter((e) => e.nombre !== 'Bacon');

/* Horario a confirmar con Nico. El cupo arranca en 8 por turno: +15.000 hamburguesas en un año dan unas 60 por noche. */
const HORARIO = { abre: '20:30', cierra: '23:00', ultimoTurno: '22:45', cadaMin: 15 };
const CUPO_INICIAL = 8;

/* ==== Carta real, según las historias destacadas de Instagram ==== */
const TAMANOS = [
  { nombre: 'Simple', precio: 17000 },
  { nombre: 'Doble', precio: 19000 },
  { nombre: 'Triple', precio: 21000 },
];
const burger = (id, nombre, desc, sacar, foto = null, placa = null, extras = EXTRAS) => ({
  id, cat: 'burgers', nombre, desc, sacar, foto, placa, extras, icono: '🍔', conPapas: true, titulo: 'Tamaño', opciones: TAMANOS,
});
const complemento = (id, nombre, desc, titulo, opciones, foto, icono) => ({
  id, cat: 'acompanar', nombre, desc, titulo, opciones, foto, placa: foto, icono, sacar: [], extras: [],
});
const POR_UNIDAD = (a, b, c) => [{ nombre: 'x6', precio: a }, { nombre: 'x10', precio: b }, { nombre: 'x14', precio: c }];

const PRODUCTOS = [
  /* La burger del mes es de ejemplo: falta saber cuál es la de este mes. */
  { id: 'mes', cat: 'mes', nombre: 'La del mes', foto: 'img/burger_mes.jpg', placa: 'img/burger_mes.jpg', icono: '🍔', conPapas: true,
    desc: 'Ejemplo: smash 100 g, cheddar, aros de cebolla, bacon y salsa Coni.',
    titulo: 'Tamaño', opciones: TAMANOS, sacar: ['Cheddar', 'Aros de cebolla', 'Bacon', 'Salsa Coni'], extras: EXTRAS },

  burger('new_york', 'New York', 'Smash 100 g, cheddar, lechuga, tomate, cebolla caramelizada y salsa Coni.',
    ['Cheddar', 'Lechuga', 'Tomate', 'Cebolla caramelizada', 'Salsa Coni'], 'img/b_new_york.jpg', 'img/placa_new_york.jpg'),
  burger('miami', 'Miami', 'Smash 100 g, doble cheddar, doble bacon, cebolla caramelizada y salsa Coni.',
    ['Cheddar', 'Bacon', 'Cebolla caramelizada', 'Salsa Coni'], 'img/b_miami.jpg', 'img/placa_miami.jpg'),
  burger('boston', 'Boston', 'Smash 100 g, doble cheddar, doble bacon y salsa barbacoa.',
    ['Cheddar', 'Bacon', 'Salsa barbacoa'], 'img/b_boston.jpg', 'img/placa_boston.jpg'),
  burger('chicago', 'Chicago', 'Smash 100 g, provoleta fundida, morrón asado, rúcula y salsa criolla.',
    ['Provoleta', 'Morrón asado', 'Rúcula', 'Salsa criolla']),
  burger('san_francisco', 'San Francisco', 'Smash 100 g, queso azul, provoleta, hongos salteados, cebolla caramelizada y salsa alioli.',
    ['Queso azul', 'Provoleta', 'Hongos salteados', 'Cebolla caramelizada', 'Salsa alioli'], 'img/b_san_francisco.jpg', 'img/placa_san_francisco.jpg'),
  burger('oklahoma', 'Oklahoma', 'Smash 100 g, cebolla en pluma, doble cheddar, pepinillos, ketchup y mostaza.',
    ['Cebolla en pluma', 'Cheddar', 'Pepinillos', 'Ketchup', 'Mostaza'], 'img/b_oklahoma.jpg', 'img/placa_oklahoma.jpg'),
  burger('kansas', 'Kansas', 'Smash 100 g, cheddar, bacon, aros de cebolla y salsa barbacoa.',
    ['Cheddar', 'Bacon', 'Aros de cebolla', 'Salsa barbacoa'], 'img/b_kansas.jpg', 'img/placa_kansas.jpg'),
  burger('nashville', 'Nashville', 'Pollo crispy, cheddar, lechuga, pepinillos y alioli.',
    ['Cheddar', 'Lechuga', 'Pepinillos', 'Alioli'], 'img/b_nashville.jpg', 'img/placa_nashville.jpg'),
  burger('los_angeles', 'Los Ángeles', 'Smash 100 g, doble cheddar, cebolla picada, ketchup y mostaza.',
    ['Cheddar', 'Cebolla picada', 'Ketchup', 'Mostaza'], 'img/b_los_angeles.jpg', 'img/placa_los_angeles.jpg'),
  burger('not_dallas', 'Not Dallas', 'Hamburguesa veggie, lechuga, tomate, cebolla y mayo veggie.',
    ['Lechuga', 'Tomate', 'Cebolla', 'Mayo veggie'], null, null, EXTRAS_VEGGIE),
  burger('denver', 'Denver', 'Smash 100 g, mayonesa, provoleta, bacon, lechuga y tomate.',
    ['Mayonesa', 'Provoleta', 'Bacon', 'Lechuga', 'Tomate']),

  complemento('papas_clasicas', 'Papas clásicas', 'Una porción más de papas.', 'Tamaño',
    [{ nombre: 'Mediana', precio: 8000 }, { nombre: 'Grande', precio: 10000 }], 'img/papas.jpg', '🍟'),
  complemento('papas_coni', 'Papas Coni', 'Papas con cheddar, bacon y cebolla caramelizada.', 'Tamaño',
    [{ nombre: 'Chica', precio: 7000 }, { nombre: 'Mediana', precio: 10000 }, { nombre: 'Grande', precio: 14000 }], null, '🍟'),
  complemento('onion_rings', 'Onion rings', 'Aros de cebolla + dip.', 'Cantidad', POR_UNIDAD(6000, 10000, 14000), 'img/aros.jpg', '🧅'),
  complemento('cheese_bites', 'Cheese bites', 'Bocaditos de mozzarella + dip.', 'Cantidad', POR_UNIDAD(8000, 12000, 16000), null, '🧀'),
  complemento('nuggets', 'Chicken nuggets', 'Nuggets de pollo + dip.', 'Cantidad', POR_UNIDAD(6000, 10000, 14000), null, '🍗'),
  complemento('dip_cheddar', 'Dip de cheddar', 'Para mojar lo que quieras.', 'Tamaño', [{ nombre: 'Dip', precio: 4000 }], null, '🧀'),
  complemento('cono_papas', 'Cono de papas', 'Un cono de papas fritas.', 'Tamaño', [{ nombre: 'Cono', precio: 3000 }], null, '🍟'),
];

const ESTADOS_LOCAL = {
  abierto: { nombre: 'Abierto', clase: '', aviso: '', pedir: true },
  full: { nombre: 'A full', clase: 'full', aviso: '🔥 Estamos a full: hoy demoramos un poco más. Gracias por la paciencia.', pedir: true },
  cerrado: { nombre: 'Cerrado', clase: 'cerrado', aviso: '😴 Hoy estamos cerrados. Abrimos de miércoles a domingo a las 20:30.', pedir: false },
  vacaciones: { nombre: 'Vacaciones', clase: 'cerrado', aviso: '😜 Cerramos por vacaciones. ¡Nos vemos a la vuelta!', pedir: false },
};

/* ==== Utilidades ==== */
const $ = (id) => document.getElementById(id);
const plata = (n) => '$' + Number(n).toLocaleString('es-AR');
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const producto = (id) => PRODUCTOS.find((p) => p.id === id);
const limpio = (s) => String(s ?? '').replace(/\p{Extended_Pictographic}|️|‍/gu, '').trim();
const leerLocal = (clave) => { try { return JSON.parse(localStorage.getItem(clave)); } catch { return null; } };
const guardarLocal = (clave, valor) => { try { localStorage.setItem(clave, JSON.stringify(valor)); } catch { /* sin almacenamiento también funciona */ } };

function precioUnitario(l) {
  const p = producto(l.id);
  const extras = l.extras.reduce((s, n) => s + (p.extras.find((e) => e.nombre === n)?.precio || 0), 0);
  return p.opciones[l.opcion].precio + extras;
}
const precioLinea = (l) => precioUnitario(l) * l.cant;
const nombreLinea = (l) => {
  const p = producto(l.id);
  return p.opciones.length > 1 ? `${p.nombre} ${p.opciones[l.opcion].nombre.toLowerCase()}` : p.nombre;
};
const esBurger = (l) => ['burgers', 'mes'].includes(producto(l.id)?.cat);
const contarBurgers = (lineas) => lineas.reduce((s, l) => s + (esBurger(l) ? l.cant : 0), 0);

/* ==== Turnos ==== */
const aMin = (h) => { const [a, b] = h.split(':').map(Number); return a * 60 + b; };
const aHora = (m) => `${String(Math.floor(m / 60)).padStart(2, '0')}:${String(m % 60).padStart(2, '0')}`;
const TURNOS = [];
for (let m = aMin(HORARIO.abre); m <= aMin(HORARIO.ultimoTurno); m += HORARIO.cadaMin) TURNOS.push(aHora(m));

/* ==== Link de seguimiento ==== */
const aB64 = (bytes) => btoa(String.fromCharCode(...new Uint8Array(bytes))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
const deB64 = (txt) => Uint8Array.from(atob(txt.replace(/-/g, '+').replace(/_/g, '/')), (c) => c.charCodeAt(0));

/* Lleva lo necesario para mostrar el pedido, sin nombre ni dirección. */
const crearEnlace = (d) => aB64(new TextEncoder().encode(JSON.stringify(d)));
function leerEnlace(texto) {
  try {
    const d = JSON.parse(new TextDecoder().decode(deB64(texto)));
    return /^[A-Z0-9]{3,5}$/.test(d.c) && TURNOS.includes(d.h) ? d : null;
  } catch {
    return null;
  }
}

const nuevoCodigo = () => Array.from(crypto.getRandomValues(new Uint8Array(3)), (b) => 'ABCDEFGHJKMNPQRSTUVWXYZ23456789'[b % 31]).join('');
