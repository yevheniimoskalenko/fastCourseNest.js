import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Put,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { updateProduct } from './dto/update-product.dto';
@Controller('products')
export class ProductsController {
  @Get()
  getAll(): string {
    return `getAll`;
  }
  @Get(':id')
  getOne(@Param() params): string {
    return `one ${params.id}`;
  }

  @Post()
  create(@Body() CreateProductDto: CreateProductDto): string {
    return `${CreateProductDto.title} price ${CreateProductDto.price}`;
  }
  @Delete(':id')
  remove(@Param('id') id: string): string {
    return `remove ${id}`;
  }
  @Put(':id')
  update(
    @Body() updateProduct: updateProduct,
    @Param('id') id: string,
  ): string {
    return `${updateProduct.title} ${id}`;
  }
}
