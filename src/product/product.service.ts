import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './schemas/product.schema.js';
import { Model } from 'mongoose';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private ProductModel: Model<Product>,
  ) {}

  async createProduct(data: Partial<Product>): Promise<Product> {
    const newProduct = await new this.ProductModel(data);
    return newProduct.save();
  }
  async getAllProducts(): Promise<Product[]> {
    return this.ProductModel.find().exec();
  }
}
