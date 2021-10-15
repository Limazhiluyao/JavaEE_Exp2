package org.javaee.testmybatis.controller;

import org.javaee.testmybatis.model.OrderVo;
import org.javaee.testmybatis.model.VoObject;
import org.javaee.testmybatis.util.ResponseCode;
import org.javaee.testmybatis.util.ResponseUtil;
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
    public Object findOrderById(@PathVariable("id") Integer id) {
        ReturnObject<VoObject> returnObject = ordersService.findOrderById(id);
        ResponseCode responseCode = returnObject.getCode();
        switch (responseCode) {
            case OK:
                return ResponseUtil.ok(returnObject.getData().createVo());
            case RESOURCE_ID_NOTEXIST:
                return ResponseUtil.fail(returnObject.getCode(), returnObject.getErrmsg());
            default:
                return ResponseUtil.fail(returnObject.getCode());
        }

    }


    @PostMapping("")
    public Object insertOrder(@RequestBody OrderVo orderVo) {
        ReturnObject<VoObject> returnObject = ordersService.insertOrder(orderVo);
        ResponseCode responseCode = returnObject.getCode();
        switch (responseCode) {
            case OK:
                if (returnObject.getData() != null) {
                    return ResponseUtil.ok(returnObject.getData());
                } else {
                    return ResponseUtil.ok();
                }
            default:
                return ResponseUtil.fail(returnObject.getCode(), returnObject.getErrmsg());
        }
    }

}
