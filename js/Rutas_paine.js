function addRutas() {
    var url = 'Datos/circuito-o-w.geojson';
    map.addSource('rutas-w-o', { type: 'geojson', data: url});

    map.addLayer({
        'id': 'route-w-o',
        'type': 'line',
        'source': 'rutas-w-o',
        'layout': {
        'line-join': 'round',
        'line-cap': 'round'
        },
        'paint': {
            'line-color': '#ff0000',
            'line-width': 3
        }   
        
    });
    
    var url = 'Datos/lago-sarmiento.geojson';
    map.addSource('rutas-lago-sarmiento', { type: 'geojson', data: url});

    map.addLayer({
        'id': 'route-lago-sarmiento',
        'type': 'line',
        'source': 'rutas-lago-sarmiento',
        'layout': {
        'line-join': 'round',
        'line-cap': 'round'
        },
        'paint': {
            'line-color': '#FFC733',
            'line-width': 3
        }
    });

    var url = 'Datos/mirador-serrano.geojson';
    map.addSource('rutas-mirador-serrano', { type: 'geojson', data: url});

    map.addLayer({
        'id': 'route-mirador-serrano',
        'type': 'line',
        'source': 'rutas-mirador-serrano',
        'layout': {
        'line-join': 'round',
        'line-cap': 'round'
        },
        'paint': {
            'line-color': '#6D1212',
            'line-width': 3
        }
    });

    var url = 'Datos/paine-grande.geojson';
    map.addSource('rutas-paine-grande', { type: 'geojson', data: url});

    map.addLayer({
        'id': 'route-paine-grande',
        'type': 'line',
        'source': 'rutas-paine-grande',
        'layout': {
        'line-join': 'round',
        'line-cap': 'round'
        },
        'paint': {
            'line-color': '#1EEA9D',
            'line-width': 3
        }
    });

    var url = 'Datos/mirador-lgrey.geojson';
    map.addSource('rutas-mirador-lgrey', { type: 'geojson', data: url});

    map.addLayer({
        'id': 'route-mirador-lgrey',
        'type': 'line',
        'source': 'rutas-mirador-lgrey',
        'layout': {
        'line-join': 'round',
        'line-cap': 'round'
        },
        'paint': {
            'line-color': '#1E28EA',
            'line-width': 3
        }
    });
}

function zoomToRutas(valores) {

    var coord = valores.split("/");

    map.flyTo({
            center: [coord[2], coord[1]],
            zoom: coord[0]
        });
    }

    