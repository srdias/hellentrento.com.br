from PIL import Image

def get_rgb(image_path):
    with Image.open(image_path) as img:
        img = img.convert('RGB')
        # Get color at (10, 10) which should be background
        rgb = img.getpixel((10, 10))
        # Also get dominant color just in case
        colors = img.getcolors(img.size[0] * img.size[1])
        dominant = max(colors, key=lambda x: x[0])[1]
        return rgb, dominant

if __name__ == "__main__":
    image_path = "/home/adriano-dias/fontes/hellentrento.com.br/rascunhos/logo2.jpeg"
    pixel_color, dominant_color = get_rgb(image_path)
    print(f"Pixel color (10, 10): {pixel_color}")
    print(f"Dominant color: {dominant_color}")
