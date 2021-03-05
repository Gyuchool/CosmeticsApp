package cosmetics.demo.Controller;

import cosmetics.demo.Domain.Entity.Category;
import cosmetics.demo.Service.BoardService;
import cosmetics.demo.dto.BoardDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class FillteringController {

    private final BoardService boardService;

    @GetMapping("/category/{no}")
    public Result filltering(@PathVariable Category no, Pageable page){
        List<BoardDto> boardDtos = boardService.categoryPage(no, page);
        return new Result(boardDtos, boardDtos.size());
    }

    @Data
    @AllArgsConstructor
    static class Result<T>{
        private T data;
        private int count;
    }
}
