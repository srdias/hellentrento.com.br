from PIL import Image, ImageOps

def generate_black_logo(input_path, output_path):
    # We can take the white logo and just change the RGB of non-transparent areas to (0,0,0)
    img = Image.open(input_path).convert("RGBA")
    
    datas = img.getdata()
    new_data = []
    for item in datas:
        # Keep the alpha but change color to black
        new_data.append((0, 0, 0, item[3]))
    
    img.putdata(new_data)
    img.save(output_path, "PNG")
    print(f"Black logo saved to {output_path}")

if __name__ == "__main__":
    generate_black_logo("/home/adriano-dias/fontes/hellentrento.com.br/rascunhos/logo3.png", "/home/adriano-dias/fontes/hellentrento.com.br/rascunhos/logo3_preta.png")
