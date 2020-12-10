import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
@Injectable()
export class ProductsService {
  private products = [];

  getById(id: string) {
    return this.products.find((p) => p.id === id);
  }
  getAll() {
    return this.products;
  }
  create(productDto: CreateProductDto) {
    this.products.push({
      ...productDto,
      id: Date.now().toString(),
    });
  }
}
