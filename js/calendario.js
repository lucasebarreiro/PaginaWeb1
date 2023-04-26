$(document).ready(function() {

    $('#calendar').fullCalendar({
      //defaultDate: '2020-01-01', // Muestra el calendario a partir de ese día
	  defaultDate: moment().format("YYYY-MM-DD"), //Arranca a partir del día actual
      editable: true,
      eventLimit: true, // allow "more" link when too many events
      events: [
        {
          title: 'Año Nuevo',
            url:'https://www.argentina.gob.ar/interior/feriados-nacionales-2020',
          start: '2020-01-01'
        },
		{
          title: 'Carnaval',
		  url:'https://www.argentina.gob.ar/interior/feriados-nacionales-2020',
          start: '2020-02-24',
          end: '2020-02-26',
        },
		{
          title: 'Feriados con Fines turísticos',
		  url:'https://www.argentina.gob.ar/interior/feriados-nacionales-2020',
          start: '2020-03-23',
          end: '2020-03-25',
        },
		{
          title: 'Día del Veterano y de los Caídos en la Guerra de Malvinas.',
		  url:'https://www.argentina.gob.ar/interior/feriados-nacionales-2020',
          start: '2020-03-31'
        },
		   {
          title: 'Viernes Soleado',
            url:'https://www.unlam.edu.ar',
          start: '2021-06-25',
		  end:'2021-06-28',
        },
        {
          title: 'Clase 1 - Introduccion',
          start: '2021-07-10',
          end: '2021-07-11',
      },

      {
          title: 'Clase 2 - Entrenamiento con profesor',
          start: '2021-07-15',
          end: '2021-07-16',
      },

      {
          title: 'Clase 3 - Partido oficial',
          start: '2021-07-21',
          end: '2021-07-22',
      }
        
      ]
    });

  });
