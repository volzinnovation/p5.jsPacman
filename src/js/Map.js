import Tile from './Tile.js';

class Map {
    constructor(data) {
        /*
        data = ['----------------------------',
                '============================',
                '=......==..........==......=',
                '=*====.==.========.==.====*=']
        */
        // Store tiles in array.
        this.tiles = [];
        // Set with and height according to data.
        this.width = data[0].length;
        this.height = data.length;

        this.tunnels = [];

        // Instantiate tiles and store them.
        for (let y = 0; y < this.height; y++) {
            let r = data[y];
            for (let x = 0; x < this.width; x++) {
                let code = r.charAt(x);
                let tile = new Tile(code, x, y, this);
                this.tiles.push(tile);
                if (tile.isHouse() && !this.house) { // Store left house door
                    this.house = tile;
                }
                if (tile.isTunnel() && (tile.col === 0 || tile.col === this.width - 1)) {
                    this.tunnels.push(tile);
                }
            }
        }

        this.houseCenter = this.house.getD().getD();

        // Cache tile dimensions
        this.tileWidth = this.tiles[0].width;
        this.tileHeight = this.tiles[0].height;
    }

    // Return tile object.
    getTile(col, row, inPixels) {
        if (inPixels) {
            col = parseInt(col / this.tileWidth);
            row = parseInt(row / this.tileHeight);
        }

        if (col > this.width - 1) col = 0;
        if (col < 0) col = this.width - 1;
        if (row > this.height - 1) row = 0;
        if (row < 0) row = this.height - 1;

        let idx = (row * this.width) + col;

        return this.tiles[idx] || null;
    }

    destroyItems() {
        let i = this.tiles.length;
        while (i--) {
            let t = this.tiles[i];
            if (t.item) t.item.destroy();
        }
    }

    hideItems() {
        let i = this.tiles.length;
        while (i--) {
            let t = this.tiles[i];
            if (t.item) t.item.hide();
        }
    }
}

export default Map;
