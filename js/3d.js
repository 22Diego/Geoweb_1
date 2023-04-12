    function add3D() {

        map.addSource('mapbox-dem', {
            'type': 'raster-dem',
            'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
            'tileSize': 512,
            'maxzoom': 14
        });

    map.setFog({});


        map.setTerrain({
            'source': 'mapbox-dem',
            'exaggeration': 1.5
        });

        

    }
    
    changeTerrain(terreno);
    function changeTerrain(terreno){

        if(terreno){
            map.setTerrain({
                'source': terreno,
                'exaggeration': 1.5
            });
        }else{
            map.setTerrain(null);
        }
    }