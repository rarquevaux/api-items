import { Injectable } from '@nestjs/common'
import { Item } from './item.interface'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ItemsService {
    constructor(
        @InjectRepository(Item)
        private itemsRepository: Repository<Item>,
    ){}
    
    async findAll(): Promise<Item[]> {
        const allItem: Item[] = await this.itemsRepository.find();
        return allItem;
    }


    async findOne(id: number): Promise<Item>{
        const item: Item = await this.itemsRepository.findOne(id);
        return item;
    } 


    async create(item: Item): Promise<Item>{
        await this.itemsRepository.save(item);
        return item;
    }

}