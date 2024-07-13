const esp = {
    canvas: undefined,
    x: 0,
    y: 0,
    int (cmd) {
        if (typeof cmd == "string") {
            if (cmd.endsWith(".add")) {
                const color = cmd.replace(".add","").toString()
                //console.log(document.querySelector(this.canvas))
                if (color == "00") {
                    document.querySelector(this.canvas).getContext("2d").fillStyle = "black"
                    document.querySelector(this.canvas).getContext("2d").fillRect(this.x, this.y, 8, 8)
                }
                if (color == "01") {
                    document.querySelector(this.canvas).getContext("2d").fillStyle = "red"
                    document.querySelector(this.canvas).getContext("2d").fillRect(this.x, this.y, 8, 8)
                }
                if (color == "02") {
                    document.querySelector(this.canvas).getContext("2d").fillStyle = "green"
                    document.querySelector(this.canvas).getContext("2d").fillRect(this.x, this.y, 8, 8)
                }
                if (color == "03") {
                    document.querySelector(this.canvas).getContext("2d").fillStyle = "blue"
                    document.querySelector(this.canvas).getContext("2d").fillRect(this.x, this.y, 8, 8)
                }
                if (color == "04") {
                    document.querySelector(this.canvas).getContext("2d").fillStyle = "cyan"
                    document.querySelector(this.canvas).getContext("2d").fillRect(this.x, this.y, 8, 8)
                }
                if (color == "05") {
                    document.querySelector(this.canvas).getContext("2d").fillStyle = "yellow"
                    document.querySelector(this.canvas).getContext("2d").fillRect(this.x, this.y, 8, 8)
                }
                if (color == "06") {
                    document.querySelector(this.canvas).getContext("2d").fillStyle = "magenta"
                    document.querySelector(this.canvas).getContext("2d").fillRect(this.x, this.y, 8, 8)
                }
                if (color == "07") {
                    document.querySelector(this.canvas).getContext("2d").fillStyle = "white"
                    document.querySelector(this.canvas).getContext("2d").fillRect(this.x, this.y, 8, 8)
                }
                this.x += 8
            }
            if (cmd == ".ady") {
                this.y += 8
            }
            if (cmd == ".ngx") {
                this.x -= 8
            }
            if (cmd == ".ngy") {
                this.y -= 8
            }
            if (cmd == ".adx") {
                this.x += 8
            }
        }
    }
}