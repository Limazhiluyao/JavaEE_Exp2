package org.javaee.testmybatis.controller;

import org.javaee.testmybatis.model.OrderVo;
import org.javaee.testmybatis.model.VoObject;
import org.javaee.testmybatis.util.ResponseCode;
import org.javaee.testmybatis.util.ResponseUtil;
import org.javaee.testmybatis.util.ReturnObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.javaee.testmybatis.service.OrdersService;

import javax.servlet.http.HttpServletResponse;


@RestController
@RequestMapping(value = "/orders", produces = "application/json;charset=UTF-8")
public class OrdersController {

    @Autowired
    private OrdersService ordersService;

    @Autowired
    private HttpServletResponse httpServletResponse;

    @GetMapping("{id}")
    public Object selectOrderById(@PathVariable("id") Integer id) {
        ReturnObject<VoObject> returnObject = ordersService.selectOrderById(id);
        ResponseCode responseCode = returnObject.getCode();
        switch (responseCode) {
            case RESOURCE_ID_NOTEXIST:
                httpServletResponse.setStatus(HttpStatus.NOT_FOUND.value());
                return ResponseUtil.fail(returnObject.getCode(), returnObject.getErrmsg());
            case OK:
                return ResponseUtil.ok(returnObject.getData().createVo());
            default:
                return ResponseUtil.fail(returnObject.getCode());
        }

    }
    

    @PostMapping("")
    public Object insertOrder(@RequestBody OrderVo orderVo) {
        ordersService.insertOrder(orderVo);

    }

}
