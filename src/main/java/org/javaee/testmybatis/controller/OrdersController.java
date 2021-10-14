package org.javaee.testmybatis.controller;

import org.javaee.testmybatis.model.OrderVo;
import org.javaee.testmybatis.util.ResponseCode;
import org.javaee.testmybatis.util.ReturnObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.javaee.testmybatis.service.OrdersService;


@RestController
@RequestMapping(value = "/orders", produces = "application/json;charset=UTF-8")
public class OrdersController {

    @Autowired
    private OrdersService ordersService;

    @GetMapping("{id}")
    public Object selectOrderById(@PathVariable("id") Integer id) {
        Object order = ordersService.selectById(id);
        return new ReturnObject<Object>(order);
    }


    @PostMapping("")
    public Object insertOrder(@RequestBody OrderVo orderVo) {
        ordersService.insertOrder(orderVo);
        return new ReturnObject<Object>(ResponseCode.OK);
    }

}
