package cosmetics.demo.Service;

import cosmetics.demo.Domain.Entity.BoardEntity;
import cosmetics.demo.Domain.Entity.Category;
import cosmetics.demo.Domain.Entity.Member.MemberEntity;
import cosmetics.demo.Domain.Repository.BoardRepository;
import cosmetics.demo.Domain.Repository.MemberRepository;
import cosmetics.demo.dto.BoardDto;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Transactional(readOnly = true)
@Service
public class BoardService {

    private final BoardRepository boardRepository;
    private final MemberRepository memberRepository;

    // 카테고리별 게시글 목록 //
    public Page<BoardDto> Boardlist(Category category, Pageable pageable) {
        Page<BoardEntity> entityPage = boardRepository.findBoardEntitiesByCategory(category, pageable);
        //page<entity> -> page<Dto>
        return entityPage.map(BoardDto::new);

    }

    //<수정>//
    @Transactional
    public BoardDto addLikeAndHOT(Long id){
        BoardEntity boardEntity = boardRepository.findById(id).get();
        BoardDto boardDto = new BoardDto(boardEntity);
        boardDto.setLike(boardDto.getLike()+1);

        if(boardDto.getLike()>=10){
            boardDto.setHot(true);
        }
        return boardDto;
    }

    public BoardDto getPost(Long id) {
        Optional<BoardEntity> boardEntityWrapper = boardRepository.findById(id);
        BoardEntity boardEntity = boardEntityWrapper.get();

        return new BoardDto(boardEntity);
    }

    @Transactional
    public Long savePost(Long memberId, Category category, BoardDto boardDto) {
        MemberEntity findMember = memberRepository.findOne(memberId);

        BoardEntity board = BoardEntity.builder()
                .id(boardDto.getId())
                .title(boardDto.getTitle())
                .content(boardDto.getContent())
                .viewcnt(boardDto.getViewcnt())
                .build();

        board.setCategory(category);
        board.setMember(findMember);

        return boardRepository.save(board).getId();
    }
    //<수정>//
    @Transactional
    public Long addViews(Long id, BoardDto boardDto){
        BoardEntity boardEntity = boardRepository.findById(id).get();
        boardEntity.updateView(boardEntity.getViewcnt()+1);

        return boardEntity.getId();
    }

    @Transactional
    public void deletePost(Long memberId, Long boardId) {
        boardRepository.deleteById(boardId);
        MemberEntity findMember = memberRepository.findOne(memberId);
        List<BoardEntity> findBoards = boardRepository.findByMemberEntityId(memberId);
        findMember.setBoards(findBoards);
    }

    //==게시글 찾기==//
    public List<BoardDto> searchPosts(String keyword) {
        List<BoardEntity> boardEntities = boardRepository.findByTitleContaining(keyword);
        List<BoardDto> boardDtoList = new ArrayList<>();

        if (boardEntities.isEmpty()) return boardDtoList;

        for (BoardEntity boardEntity : boardEntities) {
            boardDtoList.add(new BoardDto(boardEntity));
        }

        return boardDtoList;
    }

    //==게시글 업뎃==//
    @Transactional
    public BoardDto updatePost(Long id, BoardDto board){
        Optional<BoardEntity> findBoard = boardRepository.findById(id);
        BoardEntity boardEntity = findBoard.get();
        BoardEntity.builder()
                .content(board.getContent())
                .title(board.getTitle())
                .viewcnt(board.getViewcnt())
                .memberEntity(boardEntity.getMemberEntity())
                .modifiedDate(board.getModifiedDate())
                .build();
        BoardDto boardDto = new BoardDto(boardEntity);
        return boardDto;
    }

    public List<BoardDto> searchPostsByCategory(String keyword, Category category, Pageable pageable) {
        List<BoardEntity> content = boardRepository.findBoardEntitiesByCategoryAndTitleContaining(keyword, category, pageable).getContent();

        List<BoardDto> collect = content.stream()
                .map(o -> new BoardDto(o))
                .collect(Collectors.toList());

        return collect;
    }
}
