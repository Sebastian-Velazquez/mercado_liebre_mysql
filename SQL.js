SQL.
Unike KEY : es para restringir duplicados de valores en los campos.

Create table:
	CREATE create table (nombre_comuna tipo_de_dato)
		Ejemplo: 
			CREATE TABLE post (
    			id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    			titulo VARCHAR(200)
				)

Como definir claver Primary y forece:
	Ejemplo:
		CREATE TABLE ordenes (
	    orden_id INT NOT NULL,
	    orden_numero INT NOT NULL,
	    cliente_id INT,
	    PRIMARY KEY (orden_id), //clave principal de la tabla
	    FOREIGN KEY (cliente_id) REFERENCES clientes(id) //la clave foranea de la tabla es la clave primaria de otra table, se coloca para establecer una relacion entre las tablas.
		);

Borrar las tablas:
	DROP TABLE IF EXIST movies;  //borra tabla movies si existe. No es necesario poner ej exist.

Modificar una tabla existente:
	ALTER TABLE permite alterar una tabla ya existente y va a operar con tres comandos:
	ADD: para agregar una columna.
		Ejemplo:
			ALTER TABLE movies
			ADD rating DECIMAL(3,1) UNSIGNED NOT NULL;
			//Agrega la columna rating, aclarando tipo de dato y constraint.

	MODIFY: para modificar una columna.
		Ejemplo:
			ALTER TABLE movies
			MODIFY rating DECIMAL(4,1) UNSIGNED NOT NULL;
			Modifica el decimal de la columna rating. 
			//Aunque el resto de las configuraciones de la tabla no se modifiquen, es necesario escribirlas en la sentencia.

	DROP: para borrar una columna.
		Ejemplo:
			ALTER TABLE movies
			DROP rating;
			//Borra la columna rating.

Foreign Key(Clave Foranea): Guarda los datos de una columna de otra tabla, Es la relacion entre tablas de Primary key.
	

Insert, update y delete. Son para insertar, modificar y eliminar registros en una tabla.
	ISERT:
		Existen dos formas de agregar datos en una tabla:
			Insertando datos en todas las columnas:
				INSERT INTO table_name (columna_1, columna_2, columna_3, ...)
							VALUES (valor_1, valor_2, valor_3, ...);
					Ejemplo:
						INSERT INTO usuarios (id, nombre, apellido)
									VALUES (DEFAULT, 'Max', 'Power');
					Ejemplo: No es necesario declarar los nombres de lo campos
						INSERT INTO usuarios
						VALUES (DEFAULT, 'Max', 'Power');

			Insertando datos en las columnas que especifiquemos: Insertar datos especificos en campos especificos.
				Para insertar datos en una columna en específico, aclaramos la tabla y luego escribimos el nombre 
				de la o las columnas entre los paréntesis.
				INSERT INTO usuarios (nombre)
							VALUES ('Santi');
				INSERT INTO peliculas (duracion, titulo) 
							VALUES (112, 'kill Bill');
	UPDATE:
		UPDATE modificará los registros existentes de una tabla. Es importante recordar utilizar siempre el WHERE 
		en la sentencia para agregar la condición de cuáles son las filas que queremos actualizar.
			UPDATE nombre_tabla
			SET columna_1 = valor_1, columna_2 = valor_2, ...
			WHERE condición;
			Ejemplo:
				UPDATE usuarios
				SET nombre = 'Cosme', apellido = 'Fulanito'
				WHERE id = 1;
	DELETE:
		Con DELETE podemos borrar información de una tabla. Al igual que con UPDATE, es importante no olvidar el WHERE 
		cuando escribimos la sentencia, aclarando la condición. Si no escribimos el WHERE, estaríamos borrando toda la 
		tabla y no un registro en particular.
			DELETE FROM nombre_tabla WHERE condición;
				Ejemplo:
					DELETE FROM usuarios WHERE usuario_id = 4;

SELET: Se usa para realizar consultas
	SELECT nombre_columna, nombre_columna, ...
	FROM nombre_tabla;

WHERE 
	La funcionalidad del WHERE es la de condicionar y filtrar las consultas SELECT que se realizan a una base de datos.
		SELECT nombre_columna_1, nombre_columna_2, ...
		FROM nombre_tabla
		WHERE condicion;
			Ejemplo:
				SELECT nombre, edad
				FROM usuarios
				WHERE edad > 17;
			Operadores:
				= Igual a
				> Mayor que
				>= Mayor o igual que
				< Menor que
				<= Menor o igual que
				<> Diferente a
				!= Diferente a
				IS NULL Es nulo
				BETWEEN Entre dos valores
				IN Lista de valores
				LIKE Se ajusta a...

ORDE BY: ORDER BY se utiliza para ordenar los resultados de una consulta según el valor de la columna especificada.
	SELECT nombre_columna1, nombre_columna2
	FROM tabla
	WHERE condicion
	ORDER BY nombre_columna1;
		Ejemplo: 
			SELECT nombre, edad
			FROM usuarios
			WHERE edad > 21
			ORDER BY nombre DESC;

BETWEEN: Entre:
	SELECT nombre, edad
	FROM alumnos
	WHERE edad BETWEEN 6 AND 12;

LIKE: Para hacer una busqueda con caracteres
	"%asd" al inicio 
	"asd%" al final 
	"%asd%" entre, en el medio
	"_a%" devuelve todos lo que tienen "a"

LIMIT: Su funcionalidad es la de limitar el número de filas (registros/resultados) devueltas en las consultas SELECT:
	Ejemplo: 
	SELECT *
	FROM peliculas
	WHERE premios > 4
	LIMIT 10;
	
OFFSET: nos permite especificar a partir de qué fila comenzar la recuperación de los datos solicitados. 
	SELECT id, nombre, apellido
	FROM alumnos
	LIMIT 20 //muestra 20 resultados
	OFFSET 20; //desolaza que muestre a partir del resultado 20. osea del 21 arranca

AS: Para darle un nombre que no modifica a los campos.. sirve para darle mas proligidad a la consulta.

FUNCIONES DE ALTERACION:
	CONCAT:
		SELECT CONCAT('Hola ', 'a ', 'todos.'); //'Hola a todos.'
		SELECT CONCAT('La respuesta es: ', 24, '.');//'La respuesta es 24.'
		SELECT CONCAT('Nombre: ', first_name, ' ', last_name) FROM actors;//'Nombre: Emilia Clarke'

	COALESCE: Usamos COALESCE para obtener la primera expresión que no sea NULL:
		SELECT COALESCE(NULL, 1, 20, 'Digital House');// 1
		SELECT COALESCE(NULL, NULL, 'Digital House');// 'Digital House'

	DATEDIFF: Usamos DATEDIFF para devolver la diferencia (en días) entre dos fechas, 
	tomando como granularidad el intervalo especificado.
		SELECT DATEDIFF('2017/08/25', '2017/08/15');// 10

	EXTRACT: para extraer partes de una fecha:
		SELECT EXTRACT(SECOND FROM '2014-02-13 08:44:21');//21
		SELECT EXTRACT(MINUTE FROM '2014-02-13 08:44:21');//44
		SELECT EXTRACT(HOUR FROM '2014-02-13 08:44:21');//8
		SELECT EXTRACT(DAY FROM '2014-02-13 08:44:21');//13
		SELECT EXTRACT(WEEK FROM '2014-02-13 08:44:21');//6 Semana
		SELECT EXTRACT(MONTH FROM '2014-02-13 08:44:21');//2
		SELECT EXTRACT(QUARTER FROM '2014-02-13 08:44:21');//1 Cuatrimestre
		SELECT EXTRACT(YEAR FROM '2014-02-13 08:44:21');//2014

	REPLACE: Usamos REPLACE para reemplazar una secuencia de caracteres por otra en un string.
		SELECT REPLACE('abc abc', 'a', 'B');// Bbc Bbc
		SELECT REPLACE('abc abc', 'A', 'B');// abc abc  -- no se encuentran coincidencias para reemplazar
		SELECT REPLACE('123 123', '2', '5');// 153 153

	DATE_FORMAT: para que dada una fecha determinada se pueda formatear la misma según deseemos.
		SELECT DATE_FORMAT('2017-06-15', '%Y');//'2017'
		SELECT DATE_FORMAT('2017-06-15', '%W %M %e %Y');//'Thursday June 15 2017'

	CASE: Es para darle para darle un cambio en los valos para que se vea mas claro. no afecata a los campos 
		SELECT id, title, rating
    CASE
		WHEN rating < 4 THEN 'Mala'
		WHEN rating < 6 THEN 'Regular'
		WHEN rating < 8 THEN 'Buena'
		WHEN rating < 9.5 THEN 'Muy buena'
		ELSE 'Excelente'
		END AS rating_categories
		FROM movies
		ORDER BY rating


INNER JOIN: Para hacer consultas de una o varias tablas:
	La sintaxis del join no utiliza el WHERE, si no que requiere la palabra ON. Es ahí en donde indicaremos el filtro
	a tener en cuenta para realizar el cruce.
	Es decir, que lo que antes escribíamos en el WHERE ahora lo escribiremos en el ON.
		Ejemplo: SELECT clientes.id AS id, clientes.nombre, ventas.fecha
			FROM clientes
			INNER JOIN ventas
			ON clientes.id = ventas.cliente_id

	LEFT JOIN: Para incluir aquellos clientes sin ventas basta cambiar INNER JOIN por LEFT JOIN. 
	El LEFT JOIN incluirá todos los registros de la primera tabla de la consulta (la tabla izquierda)
	incluso cuando no exista coincidencia con la tabla derecha.
		SELECT clientes.id AS id, clientes.nombre, ventas.fecha
		FROM clientes
		LEFT JOIN ventas
		ON clientes.id = ventas.cliente_id

	RIGHT JOIN: Para incluir aquellas ventas sin clientes basta cambiar LEFT JOIN por RIGHT JOIN. 
	El RIGHT JOIN incluirá todos los registros de la tabla derecha. Si miramos la query, 
	la tabla ventas aparece posterior a la tabla de clientes… ¡a la derecha!
		SELECT clientes.id AS id, clientes.nombre, ventas.fecha
		FROM clientes
		RIGHT JOIN ventas
		ON clientes.id = ventas.cliente_id

	Cruzando muchas tablas:
		SELECT clientes.id AS id, clientes.nombre, ventas.fecha
		FROM clientes
		INNER JOIN ventas
		ON clientes.id = ventas.cliente_id
		INNER JOIN productos
		ON productos.id = ventas.producto_id

DISTINCT: La cláusula DISTINCT nos devuelve valores únicos. En una tabla, una columna puede contener valores
duplicados y algunas veces solo se necesita un listado con los valores diferentes. 
Es decir, que no aparezcan aquellos que están repetidos.
	SELECT DISTINCT columna_1, columna_2
	FROM nombre_tabla;

GROUP BY: GROUP BY agupas varias filas en un dato
	SELECT columna_1,
	FROM nombre_tabla
	WHERE condition
	GROUP BY columna_1;
		Ejemplo:
			SELECT marca,
			FROM autos
			GROUP BY marca;

FUNCIONES AGREGADOS: Las funciones de agregación realizan cálculos sobre un conjunto de datos y devuelven un único resultado.
Excepto COUNT, las funciones de agregación ignorarán los valores NULL.
	COUNT: Devolverá la cantidad de filas/registros que cumplen con el criterio.
		Ejemplo: SELECT COUNT(*) FROM movies;//Devolverá la cantidad de registros de la tabla movies
		Ejemplo: SELECT COUNT(id) AS total FROM movies WHERE genre_id = 3;// Devolverá la cantidad de películas de la tabla movies con el genero_id 3 en una columna con el nombre “total”.	
	
	AVG (average) devolverá el promedio de una columna con valores numéricos. 
		Ejemplo: SELECT AVG(rating) FROM movies; //Devolverá el promedio del rating de las películas de la tabla movies.
	
	SUM (suma) devolverá la suma de una columna con valores numéricos.
		Ejemplo: SELECT SUM(length) FROM movies;//Devolverá la suma de las duraciones de las películas de la tabla movies.

	MIN devolverá el valor mínimo de una columna con valores numéricos. 
		Ejemplo: SELECT MIN(rating) FROM movies;//Devolverá el rating de la película menos ranqueada.
	MAX devolverá el valor máximo de una columna.
		Ejemplo: SELECT MAX(rating) FROM movies;//Devolverá el rating de la película mejor ranqueada.

HAVING: umple la misma función que WHERE, a diferencia de que HAVING se va a poder usar en conjunto
		con las funciones de agregación para filtrar datos agregados.
			Ejemplo:
				SELECT columna
				FROM tabla
				WHERE condicion
				GROUP BY columna
				HAVING condicion
				ORDER BY columna;

					Ejemplo:Esta consulta devolverá la cantidad de clientes por país (agrupados por país). 
					Solamente se incluirán en el resultado aquellos países que tengan al menos 3 clientes. 
					SELECT COUNT(cliente_id), pais
					FROM clientes
					GROUP BY pais
					HAVING COUNT(clienteId) > 3;

----------------------------------------------------------------------------
PROMESAS
	Las promesas son funciones que permiten ejecutar código asincrónico de forma eficiente.

		Pedidos asincrónicos: es un conjunto de instrucciones que se ejeutan mediante un mecanismo 
			especifico como una promesa. Esto hace posible que sea procesad en otro momento. Esto hace
			que no se bloquee y se siga ejecuatando en segundo plano.

		.then() La funcion asicronica devolvera un resultado, o no. Mienra tando, el codigo se sigue ejecutando.
			obtenerUsuarios()// Fución asigrónica
				
				.then(function(data){
			   	console.log(data);
				});
		console.log("Se sigue ejecutando!")

		Pedidos anidados: a veces .then() puede tener promesas adentro. Para resolver esto se necesita otro .then() que se ejecutara
			una vez finalizado el de arriba, tipo cascada. Tambien los .then() deben retornar la data para que pueda ser usada por otra.
				obtenerUsuarios()
			    .then(function(data){
			        return filtrarDatos(data);
			    })
			    .then(function(dataFiltrada){
			        console.log(dataFiltrada);
			    })

		.catch(): se usa para devolver un error
			obtenerUsuarios()
		    .then(function(data){
		        console.log(data);
		    })
		    .catch(function(error){
		        console.log(error);
		    })

		Promise.all() A veces necesitamos que dos o más promesas se resuelvan para realizar cierta acción. Para esto
		usamos Promise.all(). Este contendrá un array de promesas que, una vez se hayan resuelto, se ejecutará un .then()
		con los resultados de las mismas.
		Lo que primero debemos hacer es guardar en variables las promesas que necesitamos obtener
			let promesaPeliculas = obtenerPeliculas()
			Promise.all([promesaPeliculas, promesaGeneros])
			//.then se ejecuta, si y solo si las dos promesas de cumplen
			.then(function([resultadoPeliculas,resultadoGeneros]){
			  console.log(resultadoPeliculas, resultadoGeneros);
			})

Sequelize y su configuración. Es un npm para poder interactuar y usar el la db en javascript
	Instalacion: 
				npm install sequelize-cli -g

				npm install sequelize

				npm install mysql2
	//depende el sistema operativo, si tira error poner al inico "sudo" que da propiedades de administrador

	Creamos en l raiz del proyecto el archvos .sequelizerc
	Le pnemos el contenido: 
		const path = require('path')
 
		module.exports = {
		 config: path.resolve('./database/config', 'config.js'),
		 'models-path': path.resolve('./database/models'),
		 'seeders-path': path.resolve('./database/seeders'),
		 'migrations-path': path.resolve('./database/migrations'),
		}
	En terminal escribimos: sequelize init
	TE pone esto en consola: 

		Sequelize CLI [Node: 18.12.1, CLI: 6.6.0, ORM: 6.28.0]

		Created "database\config\config.js"
		Successfully created models folder at "C:\Users\Windows 10 64\Desktop\HD\mercado liebre\mercado_liebre\database\models".
		Successfully created migrations folder at "C:\Users\Windows 10 64\Desktop\HD\mercado liebre\mercado_liebre\database\migrations".
		Successfully created seeders folder at "C:\Users\Windows 10 64\Desktop\HD\mercado liebre\mercado_liebre\database\seeders".

	Ahora confifurar el archivo /database/config/config.js
		contenido:
			module.exports = {//modele.exports hay que ponerlo
		  "development": {//base de tatos para desarrollo
		    "username": "root",//editar
		    "password": "123",//editar
		    "database": "database_nombre",//editar
		    "host": "127.0.0.1",
		    "dialect": "mysql"
		  },
		  "test": {//base de tatos para testing
		    "username": "root",
		    "password": null,
		    "database": "database_test",
		    "host": "127.0.0.1",
		    "dialect": "mysql"
		  },
		  "production": {//base de tatos para producción
		    "username": "root",
		    "password": null,
		    "database": "database_production",
		    "host": "127.0.0.1",
		    "dialect": "mysql"
		  }
		}
	Y listo de ahora en mas si queremos llamar la la base de datos con la variable exportada "db" que esta en config/models/index.js


	MODELOS: es para enlazar una db mysql en node.js
		Creando un modelo: En los patrones de diseño MVC (Modelo - Vista - Controlador ), los modelos contienen únicamente los datos
		puros de aplicación. No contienen lógica que describa cómo pueden presentarse los datos a un usuario. Este puede acceder a la
		capa de almacenamiento de datos. Lo ideal es que el modelo sea independiente del sistema de almacenamiento.
		Es decir, un modelo es la representación de nuestra tabla en código. Con esto obtenemos recursos que nos permiten realizar 
		consultas e interacciones con la base de datos de manera simplificada usando, en este caso, Sequelize.

		1.Creando un modelo: Siempre creamos un modelo para cada tabla de nuestra base de datos. La ruta donde los almacenamos 
			es /database/models. Siempre en estos casos el archivo se escribe la primera con mayuscula Ejemplo: Pelicula.js
			Un modelo es naturalmente una función que debemos definir y luego exportar con module.export. Esta función recibe dos parámetros. 
			En primer lugar, el objeto sequelize para poder acceder a su método define() y, en segundo lugar, necesitamos traer al 
			objeto DataTypes que nos dará la posibilidad de decirle a nuestras columnas qué tipo de datos permitirán.

		2.Método .define(): El método define() nos permite definir asignaciones entre un modelo y una tabla. Este recibe 3 parámetros. 
			El primero es un alias que identifica al modelo, el segundo es un objeto con la configuración de las columnas en la base de 
			datos y el tercero es otro objeto con configuraciones adicionales (parámetro opcional). Lo que devuelva define() será almacenado en 
			una variable con el nombre del modelo para luego ser retornada por la función que creamos.
				const Pelicula = sequelize.define(alias, cols, config);
				return Pelicula;

			Alias: Como mencionamos en el slide anterior, el primero es un alias que utiliza Sequelize para identificar al modelo. No es algo 
				determinante. Solemos asignarle el mismo nombre del modelo como String.
					const Pelicula = sequelize.define("Pelicula", cols, config);
					return Pelicula;

		3.Tipos de datos: Tipos de datos en Sequelize: Dentro de nuestro segundo parámetro que llamamos cols se encuentra un objeto que nos 
			permite, en el segundo parámetro del define(), definir qué tipos de datos deben recibir las columnas en la base de datos.
				cols = {
			    id: {
			        type: DataTypes.INTEGER
			    },
			    name: {
			        type: DataTypes.STRING
			    },
			    admin: {
			        type: DataTypes.BOOLEAN
			    }
			}
				Ejemplos más utilizados:
					DataType.STRING                 // VARCHAR(255)
					DataType.STRING(400)            // VARCHAR(400)

					DataType.INTEGER                // INTEGER
					DataType.BIGINT                 // BIGINT
					DataType.FLOAT                  // FLOAT
					DataType.DOUBLE                 // DOUBLE
					DataType.DECIMAL                    // DECIMAL

					DataType.DATE                   // DATE
		
		4.Timestamps: Esttos son cuando las fechas de cuando estan creados las db y su modificación. Los timestamps no son obligatorios, 
			pero la mayoría de las tablas suelen tenerlos y forman parte del estándar.  
			Estos deben llamarse de la misma forma que se ve en el ejemplo:
			createdAt: {
					type:	DataTypes.DATE
				},
				    updatedAt: {
					type:	DataTypes.DATE
				},
		5.Configuraciones adicionales: Dentro de nuestro tercer parámetro del define() podemos configurar cosas adicionales. 
		Por ejemplo, si el nombre de nuestra tabla está en inglés y el de nuestro modelo en español, deberíamos aclararle al modelo 
		que esto es así mediante un objeto literal, como en el ejemplo de la siguiente diapositiva.

		module.exports = (sequelize, DataTypes) => {

	    const Pelicula = sequelize.define("Pelicula",
	       {
		// Configuraciones de las columnas.
		   },
		   {
		      tableName: 'movies', 
		//Si el nombre de la tabla no coincide con el del modelo
		      timestamps: false,  
		//Si no tengo timestamps
	       });
	  
	    return Pelicula;
  		}

  		EJEMPLO COMPLETO PARA CREAR UN MODELO:
			module.exports = (sequelize, DataTypes) =>{
				let alias = "Peliculas"; //se pode en plurar al nombre del archivo js
				let cols ={//definimos las columas de las tablas
				id: {
					type: DataTypes.INTEGER, //definimos las propiedades de las comna de db
					promaryKey: true,
					autoIncrement: true
				},//si no definimos una.. es una que sequalize no va a recuperar.. no lo podes usar en el codigo
				title: {
					type: DataTypes.STRING
				},
				length: {
					type: DataTypes.INTEGER 
				},
				};
				let config = {
					tableName: "movies",//esto se pone porque lo general el nombbre de la tabla el mismo nombre que el js
					timestamps: false //es  por si no tiene las tablas createdate y update
				}
				const Pelicula = sequelize.define(alias, cols, config);

				return Pelicula;
			}

	FIND: Sequelize utiliza la función find para buscar información en una base de datos. Junto con find tenemos algunas 
		variaciones como findAll(), findOne(), findByPk().
			1. findAll(): Para buscar todos los datos registrados en la tabla debemos usar: findAll().
				const db = require('../database/models');

				db.Usuario.findAll()
				.then((resultados) => {
				       console.log(resultados);
				});

			2. findOne(): Nos permite buscar resultados que coincidan con los atributos indicados en el objeto literal que recibe el método.
				db.Usuario.findOne({
				where: {
				   name: 'Tony'
				 }
				}).then((resultado) =>{
				   console.log(resultado);
				});

			3. findByPk(): Este método busca un registro con la clave primaria del mismo valor al parámetro pasado:
				db.Auto.findByPk(42)
				.then((resultado) => {
				       console.log(resultado);
				});
				// SELECT * FROM autos WHERE id = 42; 

	USAR CONDICION WHERE para llamar consultas mysql
		A menudo queremos buscar en la base de datos, pero no queremos todos los registros, solo aquellos que cumplan 
		una condición. Para filtrar datos usamos un objeto literal con el atributo WHERE y un método de búsqueda

			WHERE: Para agregar una condición a la consulta, simplemente debemos pasar el atributo where al método findAll():
				const db = require('../database/models');
				db.Auto.findAll({
				where: {
				   marca: 'Fiat'
				}
				}).then(resultados=>{
				       console.log(resultados);
				   })

			LIKE: Para agregar condiciones a la búsqueda del Where, podemos utilizar los operadores que trae Sequelize. Uno de ellos es Like:
				const db = require('../database/models');
				const Op = db.Sequelize.Op;
				Post.findAll({
				   where: {
				apellido: {[Op.Like]:'%s%'}
				   }
				}).then(resultados=>{
				       console.log(resultados);
				   })
		Documentacion: https://sequelize.org/v5/manual/querying.html	


	Order, Limit y Offset
		1. Order: Order es una forma de ordenar el resultado de la consulta a la base de datos a través de una columna elegida.
				Podemos ordenar los elementos por id, fecha de creación, nombre, etc.
			En sequelize, para ordenar el resultado simplemente hay que usar el atributo order, que recibe un array
			db.Usuario.findAll({
				order: [
					['nombre', 'ASC'],
				],
			});
		2. Limit: sirve para limitar el número de resultados a obtener.
			Para limitar el número de resultados, simplemente hay que agregar el atributo limit al objeto y pasarlo al findAll()
			db.Usuario.findAll({
			   limit: 10
			   })
			   .then((resultados) => {
			   console.log(resultados)
			})
		3. Offset: Offset sirve para omitir varios resultados. Es utilizado ampliamente para paginar los resultados.
			Para omitir varios elementos del resultado, simplemente hay que agregar el atributo offset al objeto y pasarlo al findAll():
			db.Usuario.findAll({
			   offset: 10
			   })
			   .then((resultados) => {
			   console.log(resultados)
			})
		Order + Limit + Offset Ejemplo:
			db.Usuario.findAll({
			   order: [['nombre', 'ASC']],
			   offset: 5,
			   limit: 10
			})
		Documentacion: https://sequelize.org/v4/manual/tutorial/querying.html#pagination-limiting






