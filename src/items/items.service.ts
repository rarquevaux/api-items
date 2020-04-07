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
    
    findAll(): Promise<Item[]> {
        return this.itemsRepository.find();
    }

    async create(item: Item): Promise<Item>{
        await this.itemsRepository.save(item)
        return item 
    }

}