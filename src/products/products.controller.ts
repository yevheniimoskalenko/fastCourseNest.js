import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  HttpCode,
  Header,
  Put,
  HttpStatus,
  Req,
  Res,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { updateProduct } from './dto/update-product.dto';
import { Response, Request } from 'express';
import { ProductsService } from './products.service';
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  // new
  @Get()
  getAll() {
    return this.productsService.getAll();
  }
  // old
  // @Get()
  // getAll(@Req() req: Request, @Res() res: Response) {
  //   res.send('hi').status(200);
  // }
  @Get(':id')
  getOne(@Param() params) {
    return this.productsService.getById(params.id);
  }

  @Post()
  @Header('Cache-Control', 'none')
  @HttpCode(HttpStatus.CREATED)
  create(@Body() CreateProductDto: CreateProductDto) {
    return this.productsService.create(CreateProductDto);
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
