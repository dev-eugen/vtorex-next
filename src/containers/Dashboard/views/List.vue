<template>
    <div class="mr-4 border-b  ">
        <div>
            <div class="flex justify-end items-center">
                <button class="btn-circle-primary-md">Добавить</button>
            </div>
        </div>
        <div class="">
            <div>
                <h1>Доп. расходы по заказу</h1>

            </div>
        </div>
    </div>
    <div class="mt-8">
        <h1 class="label-big">
            Доп. расходы по заказу<span class="cursor-pointer"></span>
        </h1>
    </div>
    <div class="section grid grid-cols-1 gap-4 mt-4">
        <div class="flex justify-center grid  grid-cols-1 w-auto mx-8">
            <div class="tl">
                <label class="label-primary">Дата:</label>
                <div class="flex  items-center">
                    <flat-pickr :locale="'ru'" class="input-primary">
                    </flat-pickr>
                    <CalendarIcon class="h-6 w-6 text-primary-400 ml-2" />
                </div>
            </div>
            <div class="tl">
                <label class="label-primary">Заказ:</label>
                <input type="text" class="input-primary" placeholder="" />
            </div>
            <div class="tl">
                <label class="label-primary">Действие</label>
                <div>
                    <select class="dropdown-primary">
                        <option value="+" selected="true">Да</option>
                        <option value="-">Нет</option>
                    </select>
                </div>
            </div>

            <div class="tl ">
                <label class="label-primary"> Операция оплаты:</label>
                <div>
                    <modal-select :data="{
                                    label:' Операция оплаты',
                                    api: '/insp'     ,
                                    meanKey: 'name'
                                    }"></modal-select>
                </div>
            </div>

            <div class="tl ">
                <label class="label-primary">Отгрузка:</label>
                <div>
                    <modal-select :data="{
                                    label:'Отгрузка',
                                    api: '/insp'     ,
                                    meanKey: 'name'
                                    }"></modal-select>
                </div>
            </div>
            <div class="tl">
                <label class="label-primary"> Курс к нац.:</label>
                <input type="text" class="input-primary" placeholder="" />
            </div>
            <div class="tl">
                <label class="label-primary"> Курс к у.е.:</label>
                <input type="text" class="input-primary" placeholder="" />
            </div>
            <div class="tl">
                <label class="label-primary"> Сумма разнесения нац.:</label>
                <input type="text" class="input-primary" placeholder="" />
            </div>
            <div class="tl">
                <label class="label-primary"> Сумма разнесения у.е.:</label>
                <input type="text" class="input-primary" placeholder="" />
            </div>
            <div class="tl ">
                <label class="label-primary"> Метод разнесения:</label>
                <div>
                    <modal-select :data="{
                                    label:' Метод разнесения',
                                    api: '/insp'     ,
                                    meanKey: 'name'
                                    }"></modal-select>
                </div>
            </div>
            <div class="tl ">
                <label class="label-primary"> Категория расходов:</label>
                <div>
                    <modal-select :data="{
                                    label:' Категория расходов',
                                    api: '/insp'     ,
                                    meanKey: 'name'
                                    }"></modal-select>
                </div>
            </div>
            <div class="tl ">
                <label class="label-primary">Организация:</label>
                <div>
                    <modal-select :data="{
                                    label:'Организация',
                                    api: '/insp'     ,
                                    meanKey: 'name'
                                    }"></modal-select>
                </div>
            </div>
            <div class="tl">
                <label class="label-primary">Примечание:</label>
                <input type="text" class="input-primary" placeholder="" />
            </div>

            <div class="tl ">
                <label class="label-primary"> Товары:</label>
                <div>
                    <modal-select :data="{
                                    label:' Товары',
                                    api: '/insp'     ,
                                    meanKey: 'name'
                                    }"></modal-select>
                </div>
            </div>
        </div>
        <div>
            <div class="flex justify-center">
                <button class="btn-circle-primary-md">Добавить</button>
            </div>
        </div>
    </div>
</template>

<script setup>
    import route_create from '../api/create'
    import create from '@api_base/create'
    import {
        ref
    } from 'vue'
</script>

<style lang="scss" scoped>

</style>