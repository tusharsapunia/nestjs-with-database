import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductService } from './product.service.js';
import { Product } from './schemas/product.schema.js';

@Controller('product')
export class ProductController {
  constructor(private readonly ProductService: ProductService) {}

  @Post()
  async CreateNew(@Body() data: Partial<Product>) {
    return this.ProductService.createProduct(data);
  }

  @Get()
  async getAll() {
    return this.ProductService.getAllProducts();
  }
}
